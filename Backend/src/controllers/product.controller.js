import { Op, where } from "sequelize";
import { Product, Category, SaleDetails, Sales } from "../models/index.js";
import { sequelize } from "../db/dbConnection.js";

/** CRUD controllers */
export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "price", "availability"],
      include: {
        model: Category,
        attributes: ["name"]
      }
    });
    res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


export const createProduct = async (req, res) => {
  const { name, price, availability, category } = req.body;
  try {
    const dbCategory = await Category.findOne({
      where: {
        name: category,
      },
    });

    if (!dbCategory)
      return res.status(400).json({ message: "La categoría no existe" });

    const newProduct = await Product.create({
      name,
      price,
      availability,
    });

    dbCategory.addProduct(newProduct);
    res.status(201).json(newProduct);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const updateProduct = async (req, res) => {
  const { name, price, availability, category } = req.body;
  const { id } = req.params;
  try {
    const dbProduct = await Product.findOne({
      where: {
        id,
      },
    });

    const dbCategory = await Category.findOne({
      where: {
        name: category,
      },
    });

    if (!dbCategory)
      return res.status(400).json({ message: "La categoría no existe" });

    dbProduct.name = name;
    dbProduct.price = price;
    dbProduct.availability = availability;
    dbProduct.save();
    dbCategory.addProduct(dbProduct);

    res.send(dbProduct);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    Product.destroy({
      where: {
        id,
      },
    });
    res.status(200).json({
      message: "Producto eliminado",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

/** Management controllers */
export const topProducts = async (req, res) => {
  try {
    const dbProducts = await Product.findAll({
      limit:3,
      attributes: {
        include: [
          [
            sequelize.literal('(SELECT SUM(sales_details.items) FROM sales INNER JOIN sales_details ON sales.id = sales_details.saleId WHERE sales_details.productId = products.id)'),
            'totalItemsSold'
          ]
        ]
      },
      order: [[sequelize.literal('totalItemsSold'), 'DESC']]
    });

    res.status(200).json(dbProducts)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}


export const productStats = async (req, res) => {
  const {id} = req.params
  try {
    const { sales } = await Product.findOne({
      where: {
        id
      },
      include: {
        model: Sales,
        attributes: ["createdAt"]
      },
      attributes:[]
    })

    res.status(200).json(sales)
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

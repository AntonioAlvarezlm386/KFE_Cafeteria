import { Op } from "sequelize";
import { Product, Category, Sales } from "../models/index.js";

/** Get all the products */
export const getProducts = async (req, res) => {
  try {
    const products = await Product.findAll({
      attributes: ["id", "name", "price", "availability"],
    });
    res.json(products);
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const dbProduct = await Product.findOne({
      where: {
        id,
      },
    });

    res.json(dbProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const productSales = async (req, res) => {
  try {
    const salesPerProduct = await Product.findAll({
      where: {
        id: {
          [Op.gte]: 5,
          [Op.lte]: 20
        }
      },
    });
    res.json(salesPerProduct);
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

import { User, Product, Sales } from "../models/index.js";
import { sequelize } from "../db/dbConnection.js";

export const createSale = async (req, res) => {
  const { user, total, products } = req.body;
  try {
    const dbUser = await User.findOne({
      where: {
        access_key: user,
      },
    });
    if (!dbUser)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const dbProducts = await Promise.all(
      products.map(async (product) => {
        return await Product.findOne({
          where: {
            id: product.id,
          },
        });
      })
    );

    const newSale = await Sales.create({
      total,
    });
    await dbUser.addSales(newSale);

    for (let i = 0; i < dbProducts.length; i++) {
      const soldProduct = dbProducts[i];
      const pieces = products[i].items;

      await newSale.addProduct(soldProduct, {
        through: {
          items: pieces,
          unit_price: soldProduct.price,
          subtotal: (pieces * soldProduct.price)
        },
      });
    }

    res.status(201).json({
      message: "Venta registrada",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};


/** Management controller */

export const getSales = async(req, res) => {
  try {
    const dbProductsSold = await Sales.findAll({
      attributes: ['id', 'createdAt', 'updatedAt'],
      include: [{
          model: Product,
          attributes: ['id', 'name'],
          through: { attributes: ['items'] }
      }]
  });
  
  const productItemsSum = {};
  dbProductsSold.forEach(sale => {
    sale.products.forEach(product => {
        const productId = product.id;
        const items = product.sales_details.items;

        if (!productItemsSum[productId]) {
            productItemsSum[productId] = {
                id: productId,
                name: product.name,
                items: 0
            };
        }

        productItemsSum[productId].items += items;
    });
});

const uniqueProducts = Object.values(productItemsSum);

  res.status(200).json(uniqueProducts)

  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
}
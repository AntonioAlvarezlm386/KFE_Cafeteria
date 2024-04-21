import { User, Product, Sales, SaleDetails } from '../models/index.js'

export const createSale = async (req, res) => {

    const { user, total, products } = req.body
    try {

        const dbUser = await User.findOne({
            where:{
                access_key: user
            }
        })
        if(!dbUser) return res.status(400).json({message: 'Usuario no encontrado'})


        const dbProducts = await Promise.all(
            products.map( async (product) => {
                return await Product.findOne({
                    where: {
                        id: product.id
                    }
                })
            } )
        )

        const newSale = await Sales.create({
            total
        })
        await dbUser.addSales(newSale)

        for(let i=0; dbProducts.length; i++){
            const soldProduct = dbProducts[i];
            const pieces = products[i].items;

            newSale.addProduct(soldProduct, {
                through: {
                    items: pieces,
                    unit_price: soldProduct.price,
                    subtotal: (pieces * soldProduct.price)
                }
            })
        }

        res.sendStatus(201)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }  
}
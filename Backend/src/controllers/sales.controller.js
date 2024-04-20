import { User, Product, Sales } from '../models/index.js'

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
        

        await Promise.all(dbProducts.forEach(async (product) => {
            newSale.addProduct(product)
        }))

        await User.addSales(newSale)

        console.log(JSON.parse(JSON.stringify(dbProducts)))

        res.sendStatus(201)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
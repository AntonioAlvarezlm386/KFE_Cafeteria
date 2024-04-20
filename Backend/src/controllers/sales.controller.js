import Sales from '../models/Sales.js'

export const createSale = async (req, res) => {
    try {
        const { products } = req.body
        const newProducts = await Promise.all()
        console.log(products)

        res.sendStatus(200)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
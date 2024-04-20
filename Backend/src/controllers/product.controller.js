import Product from "../models/Product.js"
import Category from '../models/Category.js'

export const getProducts = async (req, res) => {
    try {
        const products = await Product.findAll()
        res.json(products)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getProduct = async (req, res) => {

}

export const createProduct = async (req, res) => {
    const { name, price, availability, category } = req.body
    try {
        const dbCategory = await Category.findOne({
            where: {
                name: category
            }
        })
        
        if(!dbCategory) return res.status(400).json({message: 'La categoría no existe'})
        
        const newProduct = await Product.create({
            name,
            price,
            availability
        })

        dbCategory.addProduct(newProduct)
    
        res.status(201).json(newProduct)

    } catch (error) {
        return res.status(500).json({
            message: error.message
        }) 
    }
}

export const updateProduct = async (req, res) => {

}

export const deleteProduct = async (req, res) => {
    
}
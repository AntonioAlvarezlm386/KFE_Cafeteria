import { sequelize } from '../db/dbConnection.js'
import { DataTypes } from 'sequelize'
import Category from './Category.js'

const Product = sequelize.define(
    'products', {
        name: {
            type: DataTypes.STRING
        }, 
        price:{ 
            type: DataTypes.DECIMAL
        },
        availability: {
            type: DataTypes.BOOLEAN,
            defaultValue: true
        }
    }, {
        timestamps: true
    }
)

Product.belongsTo(Category)
Category.hasMany(Product)

export default Product
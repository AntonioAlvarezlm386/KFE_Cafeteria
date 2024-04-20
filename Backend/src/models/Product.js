import { sequelize } from '../db/dbConnection.js'
import { DataTypes } from 'sequelize'

const Product = sequelize.define(
    'products', {
        name: {
            type: DataTypes.STRING
        }, 
        price:{ 
            type: DataTypes.DECIMAL
        },
        stock: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: true
    }
)


export default Product
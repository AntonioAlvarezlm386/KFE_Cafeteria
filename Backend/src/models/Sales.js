import { sequelize } from '../db/dbConnection.js'
import { DataTypes } from 'sequelize'
import Product from './Product.js'
import SaleDetails from './SalesDetail.js'

const Sales = sequelize.define(
    'sales',{
        total: {
            type: DataTypes.DECIMAL
        }
    }, {
        timestamps: true
    }
)

Product.belongsToMany(Sales, {
    through: SaleDetails
})
Sales.belongsToMany(Product, {
    through: SaleDetails
})

export default Sales
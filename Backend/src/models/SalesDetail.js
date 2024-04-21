import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from 'sequelize'


const SaleDetails = sequelize.define(
    'sales_details', {
        items: {
            type: DataTypes.INTEGER
        },
        unit_price: {
            type: DataTypes.DOUBLE
        },
        subtotal: {
            type: DataTypes.DOUBLE
        }
    }, {
        timestamps: false
    }
)


export default SaleDetails
import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from 'sequelize'


const SaleDetails = sequelize.define(
    'sales_details', {
        items: {
            type: DataTypes.INTEGER
        },
        subtotal: {
            type: DataTypes.DECIMAL
        }
    }, {
        timestamps: false
    }
)


export default SaleDetails
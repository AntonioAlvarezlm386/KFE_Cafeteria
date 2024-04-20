import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from 'sequelize'


const SaleDetails = sequelize.define(
    'sales_details', {
        items: {
            type: DataTypes.INTEGER
        },
        subtotal: {
            type: DataTypes.DOUBLE
        }
    }, {
        timestamps: false
    }
)


export default SaleDetails
import { sequelize } from "../db/dbConnection.js";
import { DataTypes } from 'sequelize'


const SalesDetail = sequelize.define(
    'sales_details', {
        items: {
            type: DataTypes.INTEGER
        }
    }, {
        timestamps: false
    }
)


export default SalesDetail
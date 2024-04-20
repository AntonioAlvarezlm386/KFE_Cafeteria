import { sequelize  } from "../db/dbConnection.js";
import { DataTypes } from 'sequelize'

const Category = sequelize.define(
    'category', {
        name: {
            type: DataTypes.STRING
        }
    }, {
        timestamps: falses
    }
)


export default Category
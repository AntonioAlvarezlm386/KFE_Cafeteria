import { sequelize } from '../db/dbConnection.js'
import { DataTypes } from 'sequelize'

const Sales = sequelize.define(
    'sales',{
        import: {
            type: DataTypes.DECIMAL
        }
    }, {
        timestamps: true
    }
)
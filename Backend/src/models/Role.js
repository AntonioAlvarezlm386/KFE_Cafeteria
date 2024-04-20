import { sequelize } from '../db/dbConnection.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define(
    'role',
    {
        name:{
            type: DataTypes.STRING
        }
    }, {
        timestamps: false
    }
)


export default User
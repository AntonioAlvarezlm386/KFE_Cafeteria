import { sequelize } from '../db/dbConnection.js'
import { DataTypes } from 'sequelize'

const User = sequelize.define(
    'users', {
        username: {
            type: DataTypes.STRING,
            unique: true
        },
        password: {
            type: DataTypes.STRING
        }        
    }, {
        timestamps: true
    }
)



export default User
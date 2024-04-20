import { sequelize } from '../db/dbConnection.js'
import { DataTypes } from 'sequelize'
import bcrypt from 'bcryptjs'
import Role from './Role.js'
import { accessKeyGenerator } from '../libs/utilities.js'
import Sales from './Sales.js'

const User = sequelize.define(
    'users', {
        first_name:{
            type: DataTypes.STRING
        },
        last_name: {
            type: DataTypes.STRING
        },
        access_key: {
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

User.beforeCreate( async (user, options) => {
    user.access_key = accessKeyGenerator(5)

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
})


User.prototype.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

User.belongsTo(Role)
Role.hasMany(User)

User.hasMany(Sales)
Sales.belongsTo(User)

export default User
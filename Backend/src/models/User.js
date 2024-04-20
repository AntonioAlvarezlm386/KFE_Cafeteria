import { sequelize } from '../db/dbConnection.js'
import { DataTypes } from 'sequelize'
import bcrypt from 'bcryptjs'
import Role from './Role.js'

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

User.beforeCreate( async (user, options) => {
    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)
})


User.prototype.comparePassword = async function (password){
    return await bcrypt.compare(password, this.password)
}

User.belongsTo(Role)
Role.hasMany(User)

export default User
import Role from '../models/Role.js'
import User from '../models/User.js'

export const createUser = async (req, res) => {
    const { first_name, last_name, password, role } = req.body
    try {
        const dbRole = await Role.findOne({
            where: {
                name: role
            }
        })

        if(!dbRole) return res.status(400).json({message: 'El rol no existe'})
        
        const newUser = await User.create({
            first_name,
            last_name,
            password
        })
        dbRole.addUser(newUser)

        res.status(201).json(newUser)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

import { SECRET } from '../config.js'
import User from '../models/User.js'
import jwt from 'jsonwebtoken'

export const signIn = async (req, res) => {
    const { access_key, password } = req.body

    try {
        const dbUser = await User.findOne({
            where: {
                access_key 
            }
        })

        if(!dbUser) return res.status(400).json({message: 'Usuario no encontrado'})

        const matchPassword = await dbUser.comparePassword(password)
        if(!matchPassword) return res.status(401).json({ message: 'Contraseña incorrecta'})

        const token = jwt.sign({id: dbUser.access_key}, SECRET, {
            expiresIn: 86400
        })

        res.json({token: token})

    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
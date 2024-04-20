import { config } from 'dotenv'
config()

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST
const DB_DATABASE = process.env.DATABASE
const SERVER_PORT = process.env.SERVER_PORT

const SECRET = process.env.SECRET

export {
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_HOST,
    SERVER_PORT,
    SECRET
}
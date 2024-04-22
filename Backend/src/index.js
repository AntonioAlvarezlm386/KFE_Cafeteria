import app from './app.js'
import { sequelize } from './db/dbConnection.js'
import { SERVER_PORT } from './config.js'
import * as Models from './models/index.js'


async function main(){
    try {
        await sequelize.sync({alter: false});
        app.listen(SERVER_PORT)
        console.log('> DB Connection successfully')
        console.log('> app listen on port', SERVER_PORT)
    } catch (error) {
        console.log("message: ", error.message)
    }
}

main()
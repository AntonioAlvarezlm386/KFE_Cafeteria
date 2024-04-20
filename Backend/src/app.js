import express from 'express'
import morgan from 'morgan'
import { endpointNotFound } from './middlewares/notFound.js'
import productRoutes from './routes/product.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))

app.use('/api/products', productRoutes)

app.use(endpointNotFound)

export default app
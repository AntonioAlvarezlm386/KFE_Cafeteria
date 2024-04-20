import express from 'express'
import morgan from 'morgan'
import { endpointNotFound } from './middlewares/notFound.js'
import productRoutes from './routes/product.routes.js'
import userRoutes from './routes/user.routes.js'
import salesRoutes from './routes/sales.routes.js'
import authRoutes from './routes/auth.routes.js'

const app = express()

app.use(express.json())
app.use(morgan('dev'))


app.use('/api/auth/signIn', authRoutes)
app.use('/api/user', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/sales', salesRoutes)

app.use(endpointNotFound)

export default app
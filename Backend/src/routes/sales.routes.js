import { Router } from 'express'
import { createSale, getSales } from '../controllers/sales.controller.js'

const router = Router()

router.post('/', createSale)

router.get('/period', getSales)

export default router
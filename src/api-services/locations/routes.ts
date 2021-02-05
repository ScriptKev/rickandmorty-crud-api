import { Router } from 'express'
import { getLocations } from './controllers'
const router = Router()

router.get('/locations', getLocations)

export default router

import { Router } from 'express'
import { getEpisodes } from './controllers'
const router = Router()

router.get('/episodes', getEpisodes)

export default router

import { Router, Request, Response } from 'express'
const router = Router()

router.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Bienvenido' })
})

router.use((req: Request, res: Response) => { // Not Found
  res.status(404).send({ message: 'Not Found' })
})

export default router
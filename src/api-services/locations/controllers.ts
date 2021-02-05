import { Request, Response } from 'express'

export const getLocations = (req: Request, res: Response) => {
  res.status(200)
    .send({ message: 'getLocations' })
}

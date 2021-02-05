import { Request, Response } from 'express'

export const getEpisodes = (req: Request, res: Response) => {
  res.status(200)
    .send({ message: 'getEpisodes' })
}

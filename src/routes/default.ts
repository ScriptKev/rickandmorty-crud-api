import charactersRoutes from '~/api-services/characters/routes'
import episodesRoutes from '~/api-services/episodes/routes'
import locationsRoutes from '~/api-services/locations/routes'
import { Request, Response, NextFunction } from 'express'

export const Root = (req: Request, res: Response) => {
  res.status(200).send({
    message: 'Acceda a las siguientes rutas',
    routes: ['/api/characters', '/api/episodes', '/api/locations']
  })
}

export const NotFound = (req: Request, res: Response) => {
  res.status(404).send({
    message: 'Ruta no encontrada porfavor ingrese a /api'
  })
}

export const HandleErrors = (err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err)
  res.status(500).send({
    message: 'Algo salio mal!'
  })
}

export {
  charactersRoutes as characters,
  episodesRoutes as episodes,
  locationsRoutes as locations,
}

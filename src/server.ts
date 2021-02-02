import express, { urlencoded } from 'express'
import cors from 'cors'
import config from '~/config'
import apiRoutes from '~/routes'
const server = express()

server.set('port', config.PORT)

server.use(cors())
server.use(express.json())
server.use(urlencoded({ extended: false }))
server.use('/api', apiRoutes)

export default server
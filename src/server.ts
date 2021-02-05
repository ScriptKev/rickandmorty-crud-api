import express, { urlencoded } from 'express'
import cors from 'cors'
import config from '~/config'
import { characters, episodes, locations, HandleErrors, NotFound, Root } from '~/routes/default'
const server = express()

server.set('port', config.PORT)

server.use(cors())
server.use(express.json())
server.use(urlencoded({ extended: false }))

server.use('/api', characters)
server.use('/api', episodes)
server.use('/api', locations)
server.use('/api', Root)
server.use(NotFound)
server.use(HandleErrors)

export default server
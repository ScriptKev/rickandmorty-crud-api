import express from 'express'
import config from '~/config'
const server = express()

server.set('port', config.PORT)

export default server
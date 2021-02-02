import 'module-alias/register'
import 'source-map-support/register'
import server from '~/server'

server.listen(server.get('port'), () => {
  console.log('⚡ Server on port', server.get('port'))
})
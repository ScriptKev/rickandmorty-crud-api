import 'module-alias/register'
import 'source-map-support/register'
import { db, initDatabase } from '~/db'
import server from '~/server'

server.listen(server.get('port'), async () => {
  console.log('⚡ Server on port', server.get('port'))

  db.connect((err) => {
    err
      ? console.log(err)
      : initDatabase()
  })

})
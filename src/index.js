import http from 'http'
// import { execute, subscribe } from 'graphql'
import { createServer } from 'http'

import app from './server'
// import schema from './schema'

const server = http.createServer(app);
let currentApp = app;

server.listen(4000, () => {
  console.log('Server listening on port 4000')
})

if (module.hot) {
  module.hot.accept(['./server'], () => {
    server.removeListener('request', currentApp);
    server.on('request', app);
    currentApp = app
  })
}

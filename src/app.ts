import express, { json } from 'express'
import cors from 'cors'

import routes from './routes'

class App {
    express: express.Application;

    constructor () {
      this.express = express()

      this.middlewares()
      this.routes()
    }

    private middlewares (): void {
      this.express.use(cors())
      this.express.use(json())
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express

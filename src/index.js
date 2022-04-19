// Middlewares
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
//

const apiPort = 8888;

// Routes
const radarRoutes = require('./routes/radarRoutes');
//

class Server {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config() {
    //   Middlewares
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(morgan('dev'));
    this.app.use(compression());
    this.app.use(helmet());
  }

  routes() {
    this.app.use(radarRoutes);
  }

  start() {
    new Promise((resolve, _reject) => {
      this.app.listen(apiPort || 8888, resolve);
    })
      .then(() => {
        console.log('┌──────────────────────────────────────┐');
        console.log(`| > HTTP server started on port ${apiPort || 8888}!  |`);
        console.log('└──────────────────────────────────────┘');
      })
      .catch((error) => {
        console.log(`Failed to start server: ${error.name}: ${error.message}`);
        process.exit(1);
      });
  }
}

let server = new Server();
server.start();

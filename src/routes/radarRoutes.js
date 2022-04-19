const { Router } = require('express');
const radarController = require('../controller/radarController');

class RadarRoutes {
  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get('/', (req, res) =>
      res.send(
        'The new YVH combat droid is finished and operational. May the Force be with you.'
      )
    );
    this.router.post('/radar', (req, res) =>
      radarController.getNextObjective(req, res)
    );
  }
}

const radarRoutes = new RadarRoutes();
radarRoutes.routes();

module.exports = radarRoutes.router;

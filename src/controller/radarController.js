const ProtocolsFactory = require('../domain/protocolFactory');
const { DroidEnvironmentModel } = require('../model/DroidEnvironmentModel');
const protocolUtils = require('../utils/protocolUtils');

class RadarController {
  constructor() {}

  getNextObjective(req, res) {
    if (!req.body) {
      res.status(400).send({
        message: 'Content can not be empty!',
      });
    }

    const data = new DroidEnvironmentModel(req.body);

    let coordinatesToScan = data.scan;

    // Discard coordinates that are too far away
    coordinatesToScan =
      protocolUtils.getCoordinatesInValidArea(coordinatesToScan);

    // Apply protocols requested
    for (let protocol of data.protocols) {
      let protocolHandler = ProtocolsFactory.getProtocolInstance(protocol);
      coordinatesToScan = protocolHandler.applyProtocol(coordinatesToScan);
    }

    let target =
      coordinatesToScan.length > 0 ? coordinatesToScan[0].coordinates : null;

    res.send(target || 'No target available!');
  }
}

let radarController = new RadarController();

module.exports = radarController;

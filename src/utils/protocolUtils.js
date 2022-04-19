const { mechType } = require('./droneConstants');

class ProtocolUtils {
  maxDroneDistance = 100;

  constructor() {}
  hasMech(arr) {
    return arr.some((el) => {
      return el.enemies.type === mechType;
    });
  }

  isFarAway(coordinate) {
    return coordinate.getDistance() >= this.maxDroneDistance;
  }

  getCoordinatesInValidArea(coordinatesToScan) {
    return coordinatesToScan.filter((pos) => {
      return !this.isFarAway(pos.coordinates);
    });
  }
}
const protocolUtils = new ProtocolUtils();
module.exports = protocolUtils;

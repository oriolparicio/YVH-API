class DroidEnvironmentModel {
  constructor(json) {
    this.protocols = json.protocols;
    this.scan = [];
    for (let scanPointData in json.scan) {
      this.scan.push(new ScanPoint(json.scan[scanPointData]));
    }
  }
}

class ScanPoint {
  constructor(scanPointData) {
    this.coordinates = new Coordinates(scanPointData.coordinates);
    this.enemies = new EnemiesInfo(scanPointData.enemies);
    this.allies = null;
    if (scanPointData.allies != null) {
      this.allies = scanPointData.allies;
    }
  }

  hasAllies() {
    return this.allies != null && this.allies > 0;
  }
}

class Coordinates {
  constructor(coordinates) {
    this.x = coordinates.x;
    this.y = coordinates.y;
  }

  // Returns distance of coordinate from point 0,0
  getDistance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

class EnemiesInfo {
  constructor(enemy) {
    this.type = enemy.type;
    this.number = enemy.number;
  }
}

module.exports = { DroidEnvironmentModel, ScanPoint, Coordinates };

const protocolUtils = require('../utils/protocolUtils');

class BaseProtocol {
  applyProtocol(coordinatesToScan) {
    return coordinatesToScan;
  }
}

// Protocol Implementations
class ClosestEnemiesProtocol extends BaseProtocol {
  applyProtocol(coordinatesToScan) {
    return coordinatesToScan.sort((a, b) => {
      return a.coordinates.getDistance() < b.coordinates.getDistance() ? -1 : 1;
    });
  }
}

class FurthestEnemiesProtocol extends BaseProtocol {
  applyProtocol(coordinatesToScan) {
    return coordinatesToScan.sort((a, b) => {
      return a.coordinates.getDistance() > b.coordinates.getDistance() ? -1 : 1;
    });
  }
}

class AssistAlliesProtocol extends BaseProtocol {
  applyProtocol(coordinatesToScan) {
    return coordinatesToScan.sort(function (a, b) {
      if (a.hasAllies() || b.hasAllies()) {
        return a.hasAllies() < b.hasAllies() ? 1 : -1;
      } else {
        return 0;
      }
    });
  }
}

class PrioritizeMechProtocol extends BaseProtocol {
  applyProtocol(coordinatesToScan) {
    if (protocolUtils.hasMech(coordinatesToScan)) {
      coordinatesToScan = coordinatesToScan.filter(function (el) {
        return el.enemies.type === 'mech';
      });
    }
    return coordinatesToScan;
  }
}

class AvoidCrossfireProtocol extends BaseProtocol {
  applyProtocol(coordinatesToScan) {
    return coordinatesToScan.filter((pos) => {
      return !pos.hasAllies();
    });
  }
}

class AvoidMechProtocol extends BaseProtocol {
  applyProtocol(coordinatesToScan) {
    if (protocolUtils.hasMech(coordinatesToScan)) {
      coordinatesToScan = coordinatesToScan.filter((el) => {
        return el.enemies.type !== 'mech';
      });
    }
    return coordinatesToScan;
  }
}

module.exports = {
  ClosestEnemiesProtocol,
  FurthestEnemiesProtocol,
  AssistAlliesProtocol,
  PrioritizeMechProtocol,
  AvoidCrossfireProtocol,
  AvoidMechProtocol,
  BaseProtocol,
};

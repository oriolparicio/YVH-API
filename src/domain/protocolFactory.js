const {
  closestEnemiesProtocolCode,
  furthestEnemiesProtocolCode,
  assistAlliesProtocolCode,
  avoidCrossfireProtocolCode,
  prioritizeMechProtocolCode,
  avoidMechProtocolCode,
} = require('../utils/droneConstants');

const {
  ClosestEnemiesProtocol,
  FurthestEnemiesProtocol,
  AssistAlliesProtocol,
  AvoidCrossfireProtocol,
  PrioritizeMechProtocol,
  AvoidMechProtocol,
  BaseProtocol,
} = require('./protocolRules');

class ProtocolsFactory {
  static getProtocolInstance(code) {
    switch (code) {
      case closestEnemiesProtocolCode:
        return new ClosestEnemiesProtocol();
      case furthestEnemiesProtocolCode:
        return new FurthestEnemiesProtocol();
      case assistAlliesProtocolCode:
        return new AssistAlliesProtocol();
      case avoidCrossfireProtocolCode:
        return new AvoidCrossfireProtocol();
      case prioritizeMechProtocolCode:
        return new PrioritizeMechProtocol();
      case avoidMechProtocolCode:
        return new AvoidMechProtocol();
      default:
        return new BaseProtocol();
    }
  }
}

module.exports = ProtocolsFactory;

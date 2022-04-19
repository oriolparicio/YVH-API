const ProtocolsFactory = require('../domain/protocolFactory');
const {
  AvoidMechProtocol,
  AvoidCrossfireProtocol,
  PrioritizeMechProtocol,
  AssistAlliesProtocol,
  FurthestEnemiesProtocol,
  ClosestEnemiesProtocol,
} = require('../domain/ProtocolRules');

// 1) ------------------- Avoid-Mech

test('Test Protocols Factory When Recived Avoid-Mech', () => {
  //GIVEN
  let protocol = 'avoid-mech';

  //WHEN
  let testResult = ProtocolsFactory.getProtocolInstance(protocol);

  //THEN
  expect(testResult).toEqual(new AvoidMechProtocol());
});

// 2) ------------------- Prioritize-Mech

test('Test Protocols Factory When Recived Prioritize-Mech', () => {
  //GIVEN
  let protocol = 'prioritize-mech';

  //WHEN
  let testResult = ProtocolsFactory.getProtocolInstance(protocol);

  //THEN
  expect(testResult).toEqual(new PrioritizeMechProtocol());
});

// 3) ------------------- Avoid-Crossfire

test('Test Protocols Factory When Recived Avoid-Crossfire', () => {
  //GIVEN
  let protocol = 'avoid-crossfire';

  //WHEN
  let testResult = ProtocolsFactory.getProtocolInstance(protocol);

  //THEN
  expect(testResult).toEqual(new AvoidCrossfireProtocol());
});

// 4) ------------------- Assist-Allies

test('Test Protocols Factory When Recived Assist-Allies', () => {
  //GIVEN
  let protocol = 'assist-allies';

  //WHEN
  let testResult = ProtocolsFactory.getProtocolInstance(protocol);

  //THEN
  expect(testResult).toEqual(new AssistAlliesProtocol());
});

// 5) ------------------- Furthest-Enemies

test('Test Protocols Factory When Recived Furthest-Enemies', () => {
  //GIVEN
  let protocol = 'furthest-enemies';

  //WHEN
  let testResult = ProtocolsFactory.getProtocolInstance(protocol);

  //THEN
  expect(testResult).toEqual(new FurthestEnemiesProtocol());
});

// 6) ------------------- Closest-Enemies

test('Test Protocols Factory When Recived Closest-Enemies', () => {
  //GIVEN
  let protocol = 'closest-enemies';

  //WHEN
  let testResult = ProtocolsFactory.getProtocolInstance(protocol);

  //THEN
  expect(testResult).toEqual(new ClosestEnemiesProtocol());
});

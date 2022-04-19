const { AvoidMechProtocol } = require('../domain/ProtocolRules');
const { ScanPoint } = require('../model/DroidEnvironmentModel');

// 1) -------------------

test('Test Avoid-Mech Protocol With a Mech', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 11, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let avoidMechProtocol = new AvoidMechProtocol();

  //WHEN
  let testResult = avoidMechProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 11, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ]);
});

// 2) -------------------

test('Test Avoid-Mech Protocol Without Any Mech', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 20, y: 13 },
      enemies: { type: 'soldier', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 11, y: 10 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 5, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let avoidMechProtocol = new AvoidMechProtocol();

  //WHEN
  let testResult = avoidMechProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 20, y: 13 },
      enemies: { type: 'soldier', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 11, y: 10 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 5, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ]);
});

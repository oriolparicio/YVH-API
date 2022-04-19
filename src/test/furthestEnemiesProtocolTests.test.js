const { FurthestEnemiesProtocol } = require('../domain/ProtocolRules');
const { ScanPoint } = require('../model/DroidEnvironmentModel');

// 1) -------------------

test('Test Furthest-Enemies Protocol With a Furthest Objective', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 21, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let furthestEnemiesProtocol = new FurthestEnemiesProtocol();

  //WHEN
  let testResult = furthestEnemiesProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 21, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
  ]);
});

// 2) -------------------

test('Test Furthest-Enemies Protocol With Multiple Furthest Objectives Equals', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 21, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 35, y: 21 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let furthestEnemiesProtocol = new FurthestEnemiesProtocol();

  //WHEN
  let testResult = furthestEnemiesProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 21, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 35, y: 21 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
  ]);
});

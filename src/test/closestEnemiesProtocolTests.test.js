const { ClosestEnemiesProtocol } = require('../domain/ProtocolRules');
const { ScanPoint } = require('../model/DroidEnvironmentModel');

// 1) -------------------

test('Test Closest-Enemies Protocol With a Closest Objective', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 11, y: 5 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 21, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let closestEnemiesProtocol = new ClosestEnemiesProtocol();

  //WHEN
  let testResult = closestEnemiesProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 11, y: 5 },
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
  ]);
});

// 2) -------------------

test('Test Closest-Enemies Protocol With Multiple Closest Objectives Equals', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 11, y: 5 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 5, y: 11 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let closestEnemiesProtocol = new ClosestEnemiesProtocol();

  //WHEN
  let testResult = closestEnemiesProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 11, y: 5 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 5, y: 11 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ]);
});

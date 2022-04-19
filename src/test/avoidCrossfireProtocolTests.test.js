const { AvoidCrossfireProtocol } = require('../domain/ProtocolRules');
const { ScanPoint } = require('../model/DroidEnvironmentModel');

// 1) -------------------

test('Test Avoid-Crossfire Protocol With Allies In Mech', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 11, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let avoidCrossfireProtocol = new AvoidCrossfireProtocol();

  //WHEN
  let testResult = avoidCrossfireProtocol.applyProtocol(coordinatesToScan);

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

test('Test Avoid-Crossfire Protocol With Allies In Multiple Objectives', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 11, y: 35 },
      allies: 20,
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let avoidCrossfireProtocol = new AvoidCrossfireProtocol();

  //WHEN
  let testResult = avoidCrossfireProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ]);
});

// 3) -------------------

test('Test Avoid-Crossfire Protocol Without Allies', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 20, y: 55 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 39, y: 11 },
      enemies: { type: 'soldier', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 9, y: 52 },
      enemies: { type: 'mech', number: 10 },
    }),
  ];

  let avoidCrossfireProtocol = new AvoidCrossfireProtocol();

  //WHEN
  let testResult = avoidCrossfireProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 20, y: 55 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 39, y: 11 },
      enemies: { type: 'soldier', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 9, y: 52 },
      enemies: { type: 'mech', number: 10 },
    }),
  ]);
});

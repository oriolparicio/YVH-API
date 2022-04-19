const { AssistAlliesProtocol } = require('../domain/ProtocolRules');
const { ScanPoint, Coordinates } = require('../model/DroidEnvironmentModel');
const protocolUtils = require('../utils/protocolUtils');

// 1) -------------------

test('Test getCoordinatesInValidArea Function With a Far Away Objective', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 90, y: 95 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 29, y: 6 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 31, y: 52 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  //WHEN
  let testResult = protocolUtils.getCoordinatesInValidArea(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 29, y: 6 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 31, y: 52 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ]);
});

// 2) -------------------

test('Test getCoordinatesInValidArea Function With Multiple Far Away Objectives', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 90, y: 95 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 62 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 89, y: 92 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  //WHEN
  let testResult = protocolUtils.getCoordinatesInValidArea(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 19, y: 62 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),
  ]);
});

// 3) -------------------

test('Test Coordinate When It Is Too Far Away', () => {
  //GIVEN
  let coordinates = new Coordinates({ x: 90, y: 95 });

  //WHEN
  let testResult = protocolUtils.isFarAway(coordinates);

  //THEN
  expect(testResult).toEqual(true);
});

// 4) -------------------

test('Test Coordinate When It Is Not Too Far Away', () => {
  //GIVEN
  let coordinates = new Coordinates({ x: 10, y: 15 });

  //WHEN
  let testResult = protocolUtils.isFarAway(coordinates);

  //THEN
  expect(testResult).toEqual(false);
});

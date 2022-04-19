const { AssistAlliesProtocol } = require('../domain/ProtocolRules');
const { ScanPoint } = require('../model/DroidEnvironmentModel');

// 1) -------------------

test('Test Assist-Allies Protocol With Allies In Mech', () => {
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

  let assistAlliesProtocol = new AssistAlliesProtocol();

  //WHEN
  let testResult = assistAlliesProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      allies: 5,
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
  ]);
});

// 2) -------------------

test('Test Assist-Allies Protocol With Allies In Multiple Objectives', () => {
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
      allies: 15,
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let assistAlliesProtocol = new AssistAlliesProtocol();

  //WHEN
  let testResult = assistAlliesProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      allies: 15,
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      allies: 5,
      enemies: { type: 'mech', number: 1 },
    }),

    new ScanPoint({
      coordinates: { x: 11, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ]);
});

// 3) -------------------

test('Test Assist-Allies Protocol Without Allies', () => {
  //GIVEN
  let coordinatesToScan = [
    new ScanPoint({
      coordinates: { x: 11, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ];

  let assistAlliesProtocol = new AssistAlliesProtocol();

  //WHEN
  let testResult = assistAlliesProtocol.applyProtocol(coordinatesToScan);

  //THEN
  expect(testResult).toEqual([
    new ScanPoint({
      coordinates: { x: 11, y: 35 },
      enemies: { type: 'soldier', number: 10 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 13 },
      enemies: { type: 'mech', number: 1 },
    }),
    new ScanPoint({
      coordinates: { x: 19, y: 19 },
      enemies: { type: 'soldier', number: 10 },
    }),
  ]);
});

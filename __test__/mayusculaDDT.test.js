//TEST

const isUpperCase = require('../utils/esMayuscula');

describe('Mayusculas', () => {
    test.each`
      Value        | expectedResult    
      ${'HELLO'}   | ${true}
      ${'hola'}    | ${false}
      ${'MALAGA'}  | ${true}
      ${'QA'}      | ${true}

    `('$Value should return $expectedResult', ({Value, expectedResult}) => {
      expect(isUpperCase(Value)).toBe(expectedResult);
    });
  });

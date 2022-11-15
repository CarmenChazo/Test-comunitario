//TEST

const palindromo = require('../utils/palindromo.js')

describe('palindromos', () => {
    test.each`
      Value              | expectedResult    
      ${'ana'}           | ${'ana'}
      ${'arribalabirra'} | ${'arribalabirra'}
      ${'maria'}         | ${'airam'}

    `('$Value should return $expectedResult', ({Value, expectedResult}) => {
      expect(palindromo(Value)).toBe(expectedResult);
    });
  });

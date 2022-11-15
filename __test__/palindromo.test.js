//TEST

const palindromo = require('../utils/palindromo.js')

test ('palindromo de fran', () =>{
    const result = palindromo ('fran')
    expect(result).toBe('narf')
})
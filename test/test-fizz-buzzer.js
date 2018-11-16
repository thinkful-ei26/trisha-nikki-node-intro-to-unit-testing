'use strict';
// import chai, declare expect variable
const expect = require('chai').expect;

// import adder
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  // test the normal case
  it('should return fizz if input is divisible by 3', function() {
  
    const normalCases = [3, 6, 9, 12];
   
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz');
    });
  });

  it('should return buzz if input is divisible by 5', function() {
  
    const normalCases = [5, 10, 20];
   
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('buzz');
    });
  });

  it('should return fizz-buzz if input is divisible by 15', function() {
  
    const normalCases = [15, 30];
   
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal('fizz-buzz');
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = ['a', true, () => {}];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});
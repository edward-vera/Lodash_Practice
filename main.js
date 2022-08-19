const _ = require('lodash');

const numbers = [8, 16, 24, 32, 40, 48, 56, 64, 72];

const myChunk = _.chunk(numbers, 4);
console.log(myChunk)
const myReverse = _.reverse(numbers);
console.log(myReverse)
const myWithout = _.without(numbers, 8, 16, 40, 64);
console.log(myWithout)
const myShuffle = _.shuffle(numbers);
console.log(myShuffle)


// TESTS

const assert = require('assert');

if(typeof describe === 'function') {


    describe("#testing chunk length", function() {
        it('should divide the array into 4 arrays', function(){
            assert.equal(myChunk.length, 3);
        });
    })



    describe("#testing if numbers are in revers", function() {
        it('should reverse the array of numbers', function(){
            assert.equal(myReverse[0], 72);
        });
    })


    describe("#testing chunk length", function() {
        it('should check if numbers have been removed', function(){
            assert.equal(
                JSON.stringify(myWithout),
                JSON.stringify([72,56,48,32,24])
            );
        });
    })

    describe("#testing chunk length", function() {
        it('should check if numbers are not in the same order', function(){
            assert.notEqual(JSON.stringify(numbers), JSON.stringify(myShuffle)); 
        });
    })

}

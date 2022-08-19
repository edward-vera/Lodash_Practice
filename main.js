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
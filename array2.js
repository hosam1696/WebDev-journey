let s = 'the quick fox jumped over the lazy dog';

let arr = s.replace(/[a-h]/g, '$&');
arr
console.log(Boolean(~1));;

// Mutator functions
/*
    javascript has a set ogfmutauor functions that allow you to modify the contents of an array without referncing the individual elements these function  often make hard technique easier
*/

/*********** MUTABLE VS IMMUTABLE****************/

let x = {
    h: 'hosam'
};

Object.defineProperty(x, 'y', {
    value: 'another hosam',
    configurable: true,
    enumerable: true
});
x.y = 'sdfsd';
console.log(x.y);

// Mutuator function that
// push, pop, shift, unshift, splice

// Iterator functions

// forEach, map, every, some, reduce

// Two dimensional and multi dimensional array

Array.matrix = function (numrows, numcols, initial) {
    let arr = [];
    for (let i = 0; i < numrows; ++i) {
        let columns = [];
        for (let j = 0; j < numcols; ++j) {
            columns[j] = initial;
        }
        arr[i] = columns;
    }
    return arr;
}

let matrix = Array.matrix(5, 5, 'h');

console.log(matrix);
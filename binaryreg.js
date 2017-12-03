//@ts-check

const {binarySearch}= require('./binarysearch.js');


let res = binarySearch([6,10,1,2,5], 1)

if (res == 1 || res == 2) {
    console.log('yes!');
} else {
    process.stdout.write('\n----\n'+res)
}



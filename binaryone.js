//@ts-check

let arr = [1,2,3];


function power(num, power) {
    console.log(num << power) ;
}

power(3, 2);


function toBinary(num) {
    let bin='', a, u = num-1 ;
    for (let i = u;i>=0;i-- ) {
        a = num >> i;
        bin += a&1;
    }
    return bin&bin
}

console.log(toBinary(30));

let pn = Date.now();
(logBinary = (to=100) => {
    for (let x = 0;x<=to;x++) {
        //console.log(x+' -> '+x.toString(2))
        console.log(x+' -> '+toBinary(x))
    }
})();

console.log(Date.now()- pn);

// computer science can be more than he formalize the computer machine but all are equivalent maintaining samples
// incredibly powerful every problem that circuit wizard there is some problem




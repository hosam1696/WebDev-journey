function isPrime(num) {
    var prime = num != 1;
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            prime = false;
            break;
        }
    } return prime;
}

console.log(isPrime(17))

const isP = num => {
    let isIt = num != 1;
    for (let i = num - 1; i >= 2; i--) {
        console.log(i)
        if ( num % i === 0) {
            isIt = false;
            break;
        }
    }
    return isIt
}

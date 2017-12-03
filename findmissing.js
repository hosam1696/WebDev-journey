//@ts-check

function fearNotLetter(str) {
    let char = '';
    let acc = 0
    let diff = 0
    return str.split('').map((p, i) => {
        if (i >= 0 && diff !== 2) {
            p
            diff = Math.abs(String(p).charCodeAt(0) - acc);
            acc = p.charCodeAt(0);
            char = String.fromCharCode(acc - 1);
        }
        return (diff === 2) ? char : undefined;
    }).pop();
}

let st = "abcdefghjklmno";
console.log(fearNotLetter(st));


console.log(typeof 'a'.charCodeAt(0))
/*
console.log("jhkjsdf".split(''));
*/
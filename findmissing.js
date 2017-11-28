//@ts-check

function fearNotLetter(str) {
    let char = '';
    let acc = 0
    let diff =0 
    return str.split('').map(( p, i)=>{
        if(i >= 0 && diff !== 2) {
            diff = Math.abs(String(p).charCodeAt(0) - acc);
            diff
            acc = p.charCodeAt(0);
            char =  String.fromCharCode(acc-1);   
            char
        }
        
        return (diff === 2)?char:undefined; 
    }).pop(); 
}

 
console.log(  fearNotLetter("abcdefghjklmno"));

console.log(typeof 'a'.charCodeAt(0))
/*
console.log("jhkjsdf".split(''));
*/
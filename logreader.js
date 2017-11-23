/*const nodeFecth = require('node-fetch');


const logReader = ()=> {
    let result;
    nodeFecth('hello.java')
        .then(
            res => {
                console.info(`your response is ${res}`);
            },err=>{
                console.warn(`The Error is ${err}`);
        }).catch(err=>{
            console.warn(`catch Error ${err}`);
        });
    return result;
};


function increaseVisitors() {
    
    let reader =  logReader();
    

}
*/

let fibo = (n) => {
    let a = 1,
        b = 0;
    while (n > 0) {
        b = a;
        a = a + b;
        console.log(a);;
        n--
    }
};

function recurFib(n) {
    if (n < 2) {
        return n+" ";
    } else {
        return recurFib(n - 1) +","+ recurFib(n - 2);
    }
}

console.log(recurFib(3))

fibo(5)
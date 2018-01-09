interface customLogger {
    log(...arg):void
}
declare let customLog: customLogger;
customLog = {
    log(...args) {
        console.log(args.join())
    }
}    

function x1() {
    customLog.log('hosam', true)
}
function x2<T>(str1:T, str2:T, joiner?:string) {
    return [str1, str2].join(joiner)
}
x1()
console.log(x2<string>('hosam', 'elnabawy'))
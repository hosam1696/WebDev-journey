// coersion is the act of forcing an object of one type to another


class Money {
    constructor(symbol, val) {
        let di = String(val).indexOf('.');
        this.symbol = symbol
        this.value = parseInt(val)
        this.cents = di>0?String(val).substring(di):''
    }

    toString() {
        return this.value+(this.cents?Number(this.cents).toFixed():'')
    }
    /*valueOf() {
        return this.cents
    }*/
}

let dollar = new Money('$', 16)

console.log(+dollar, typeof [1].toString())

// immediately invoked function 

!function invoke(){console.log('immediatly invoked function')}()
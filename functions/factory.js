/*
    Functional Prgramming in Javascript 

    in Javscript Functions is not only a functions

*/

let me = 'Hosam Elnabawy'

function greetMe() {
    console.log(`Hello ${me}!`)
}

me = 'Menna Mohamed'

greetMe()

function sendRequest() {
    let requestId = 445
    fetch('/myUrl')
        .then(res => {
            console.log(requestId, res) // we have an access to outer scope
        })
}

// closure is a compinations of functions

function makeFunc(name) {
    name = name||'Menna Mohamed'
    function disName() {
        console.log(name)
    }
    return disName
}

let setName = makeFunc('Hosam')

setName()


class X  {
    constructor(me) {
        this._me = me
    }
    get me() {
        return this._me
    }
}

let mine = new X(me)
console.log(mine.me)


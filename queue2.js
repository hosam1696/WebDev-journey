


class Queue {
    constructor( ) {
        this.dataStore = [];
    }
    enqueue(value) {
        this.dataStore.push(value);
        return value;
    }
    dequeue() {
        this.dataStore.shift(value);
        return value;
    }

    front() {
        return this.dataStore[0];
    }

    clear() {
        if (this.dataStore.length)
            this.dataStore = []
    }

    toString() {
        return this.dataStore.join('\n');
    }
}


let maleDancer = new Queue();
let femaleDancer = new Queue();
let allDanders = ['one-m', 'sdf-f','sdfsd-m', 'sdfsd-f', 'sdfsdf-f','dsfsdf-m']
class Dancer {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}
function makeDancers() {
    let sDancers = allDanders.map(d=>new Dancer(...d.split('-')));
sDancers
    let maleDancers = sDancers.filter(d=>d.gender == 'm'); 
    
    let femaleDancers = sDancers.filter(d=>d.gender == 'f');
    return [maleDancer,femaleDancer];
}

let genderDancers = makeDancers();


console.log(genderDancers[0])
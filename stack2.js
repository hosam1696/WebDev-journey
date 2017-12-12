/*
STACK is a list of elements tht are accessible only from one end of the list

stack is known as last-in first-out


*/

class Stack {
    
    constructor() {
        this.top = 0;
        this.dataStore = [];

    }

    push(element) {
        this.dataStore[this.top++] = element
        return element;
    }
    pop() {
        //this.dataStore.splice(--this.top, 1)
        return this.dataStore[--this.top];
    }

    peek() {
        return this.dataStore[this.top-1];
    }

    get length() {
        return this.top;
    }
    clear() {
        this.top = 0;
        delete this.dataStore;
        this.dataStore = [];
    }
}


function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base);
    } while (num > 0);
    var converted = "";
    while (s.length > 0) {
        converted += s.pop();
    }
    return converted;
}

let b2 = mulBase(8, 8);

b2

console.log(3%0);

// Palindromes 
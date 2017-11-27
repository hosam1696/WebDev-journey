/*
    stack first in last out

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

let myStack = new Stack();

console.log(myStack.push('hoss'), myStack.push('Menna'));



/*
// Palindomers
is a word , phrase that is spelled the same foreward and backward f
*/

function isPalindrome(word) {
    let stack = new Stack();
    let rWord = '';
    word = String(word).replace(/\s/g, '');

    for (let i = 0;i<word.length;i++) {
        stack.push(word[i])
    }
    while(stack.length > 0) {
        rWord += stack.pop();
    }

    return word == rWord

}

console.log(isPalindrome('paap '), isPalindrome(1010))



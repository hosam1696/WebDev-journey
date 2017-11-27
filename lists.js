
/*
    we will create a simple list class
pos (property) Current position in list 
length (property) Returns the number of elements in list 
clear (function) Clears all elements from list 
toString (function) Returns string representation of list 
getElement (function) Returns element at current position 
insert (function) Inserts new element after existing element 
append (function) Adds new element to end of list 
remove (function) Removes element from list 
front (function) Sets current position to first element of list 
end (function) Sets current position to last element of list 
prev (function) Moves current position back one element 
next (function) Moves current position forward one element 
currPos (function) Returns the current position in list 
moveTo (function) Moves the current position to specified position 
    */
class List {
    constructor() {
        this._pos = 0;
        this.size = 0;
        this.dataStored = [];
    }
    get pos() {
        return this._pos
    }
    set pos(newPos) {
        this._pos = newPos;
    }
    get length() {
        return this.dataStored.length;
    }
    clear() {
        delete this.dataStored;
        this.pos= this.size = 0;
        this.dataStored = [];
    }
    toString(sep=',') {
        return this.dataStored.join(sep);
    }
    insert(element, after) {
        let insertPos = this.find(after);
        if (insertPos > -1) {
            this.dataStore.splice(insertPos + 1, 0, element);
            ++this.listSize;
            return true;
        }
        return false;
    }
    append(val) {
        this.dataStored[this.pos++] = val; 
        return val;
    }
    remove(element) {
        let foundedIndex = this.find(element);
        if (foundedIndex != -1) {
            let deletedElement = this.dataStored[foundedIndex];
            this.dataStored.splice(this.find(element), 1);
            --this.pos;
            return deletedElement;
        } else {
            return -1
        }

    }
    contains(element) {
        for (var i = 0; i < this.dataStored.length; ++i) {
            if (this.dataStored[i] == element) {
                return true;
            }
        } return false;
    }
    front() {
        this.pos = 0;
    }
    end() {
        this.pos = this.length - 1;
    }
    prev() {
        if (this.pos > 0) {
              --this.pos;
       }
    }
    next() {
        if (this.pos < this.listSize-1) {
              ++this.pos;
       }
    }
    currentPos() {
        return this.pos;
    }
    moveTo(newPos) {
        this.pos = newPos;
    }
    getElement(byPos = this.pos) {
        console.log(byPos);
        return this.dataStored[byPos];
    }
    find(element) {
        for (let i = 0;i<this.dataStored.length;i++) {
            if (this.dataStored[i] === element)
                return i
        }
        return -1;
        
    }
}
const log = (...a) =>console.log(...a);
const myList = new List();

log(myList.append(55))
log(myList.append('sdfds'))
log(myList.append(true))
log(myList.append('hosam'))

//myList.clear()
log(myList.contains('hosam'),myList.dataStored, myList.length, myList.pos)
myList.end();
console.log(myList.getElement(), myList.currentPos());


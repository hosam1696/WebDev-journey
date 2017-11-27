/*
    Dictionary is a data structure that stores data as key value pairs



*/


class Dictionary {

    constructor() {
        this.dataStore = {};
    }

    add(key, value) {
        this.dataStore[key] = value;
        return true;
    }

    find(key) {
        return this.dataStore[key];
    }
    remove(key) {
        delete this.dataStore[key];
    }
    showAll() {
        let all = '';
        for  (let key of this.dicKeys) {
            all += `${key} -> ${this.dataStore[key]}`
        }
        return all;
    }

    count() {
        return this.dicKeys.length;
    }

    get dicKeys() {
        return Object.keys(this.dataStore);
    }
    clear() {
        for (let key in this.dicKeys)
            delete this.dataStore[key];
    }

}


const myDic = new Dictionary();

console.log(
    myDic.add('name', 'Hosam Elnabawy'),
    myDic.count(),
    myDic.add('love', 'Menna Allah'),
    myDic.showAll()
)
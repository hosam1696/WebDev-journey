//@ts-check

/*
    studying Algorithms is importamt because there i alaways more than one Algorithms to solve peblems

    and knowing that which ones are rhe most efficient is important for productive programmer

    there are six or seven ways to sort a list of data
    but knowing that the quick sort algorithm is more efficient than the selection sort algorithm will lead much more efficient sorting process
    
    comprehensive study of data structure and Algorithms teachs you not only which data structures and which algorithms are the most efficient but you also learn how to decide which data strucure and which algorithms are the most approperiate for the problem at hand




*/

// Array Matrix


Array.matrix = function(rowsNum, colsNum, initial = 0) {
    let arr = [];
    let colums;
    for (let i =0;i<rowsNum;i++) {
        colums = [];
        for (let j = 0;j < colsNum;j++) {
            colums[j] = initial;
        }
        arr[i] = colums;
    }
    return arr;
} 

let nums = Array.matrix(2,2,Math.random());

let grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];

const len = ds =>ds.length;
const getTotal = (acc,sum) => acc+sum;
const initId = id =>id+1;
let wantedgrades = grades
    .map((gg, i)=>{
        let length = len(gg);
        let total = gg.reduce(getTotal);
        let average = (total / 3).toFixed(2);
        return {
            id:initId(i),
            total,
            average
        }
    });

wantedgrades // [{},{},{}]


// store arrays in objects

class WeekTemps {
    constructor() {
        this.dataStore = [];

    }
    add(temp, feh = false) {
        if (feh === true) //it's fahrenhait
            temp = this.toFixedNumber((temp*5/9) - 32*5/9); // celsius to fahreheiht
        this.dataStore.push(temp)
    }

    len (ds) {return ds.length}
    
    getTotal(acc,sum){ return acc+sum }

    get total() {
        return this.dataStore.reduce(this.getTotal)
    }
    get DsLength() {
        return this.len(this.dataStore);
    }
    
    get average() {
        return this.toFixedNumber(this.total / this.DsLength);
    }

    toFixedNumber(number,digits = 2) {
        return Number(number.toFixed(digits))
    }

}

let weekTemps = new WeekTemps();

weekTemps.add(25);
weekTemps.add(25,true);

let stored =  weekTemps.dataStore;

stored //[25, -3.89]

let averageTemp = weekTemps.average;

averageTemp // 10.55
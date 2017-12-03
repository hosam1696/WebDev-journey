module.exports =  {binarySearch};


function binarySearch(arr = [], val) {
    const arrLength = arr.length;
    if (arrLength > 0)
         arr = arr.sort((a,b)=>a>b);  // TODO: will be replaced by my own sort method
    else 
        return -1;
    //arr
    let startIndex  = 0;
    let lastIndex = arrLength - 1;
    let middle = Math.floor((startIndex+lastIndex)/2);

    while(arr[middle] !== val && startIndex < lastIndex) {
        if (val > arr[middle]) {
            startIndex = middle + 1;
        } else if (val < arr[middle] ) {
            lastIndex = middle - 1;
        }
        middle = Math.floor((startIndex+lastIndex)/2);
    }

    return arr[middle] !== val ? -1 : middle;

}

let b = binarySearch(['a','h', 's','b'], 'h'); // 2
console.log(b);
console.log(binarySearch([12, 8,1,4,3], 3)); // 1

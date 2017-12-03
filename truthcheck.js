
function truthCheck(collection, pre) {

    // polyfill to Array.every
    function every(arr, cb) {
        let sum = false;
        let arrLen = arr.length;
        for (let val of arr) {
            if(cb(val))
                sum = true;
            else 
                sum = false
        }
        return sum;
    }

    // polyfill to Array.some
    function some(arr, cb) {
        let sum = false;
        let arrLen = arr.length;
        for (let val of arr) {
            if(cb(val)) {
                sum = true
                break;

            }else  {
                sum = false
        }
    }
        return sum;
    }
    return some(collection, c=>c[pre]=='male')
    //return collection.every(c=>c[pre]);
  }
  
let truth =   truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

truth
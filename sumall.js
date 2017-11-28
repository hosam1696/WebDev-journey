
function sumAll(arr=[]) {
    
    if (!arr.length || !Array.isArray(arr)) {
      return 0;
    } else {

        /*
      let first = (arr[0]<arr[1])?arr[0]:arr[1];
      let last  = (first === arr[0])?arr[1]:arr[0];
      let sum =0;
      for (let i = first; i <= last; i++) {
        sum += i;
      }
      return sum;
      */
      let first = Math.min(...arr);
      let last  = Math.max(...arr);
      let rangeArray = (()=> {
         let rangeArr = [];
          for (let i = first;i<=last;i++) {
            rangeArr.push(i);
          }
        return rangeArr;
      })();
  
      return rangeArray.reduce((acc, val) => acc+val,0);  
      }
    
  }
  
  //sumAll([1, 4]);
  let d = Date.now();
  console.log(sumAll([5, 10000]));
  console.log(Date.now() - d);
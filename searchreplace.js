
function myReplace(str, before, after) {
    let regExp = new RegExp(before, 'gi');
    console.log(str.match(regExp));
    let s = '';
    function changePos(matched, p,a) {
         s = matched+a.replace(matched, '');
    }
     str.replace(str.match(regExp), changePos);

     return s;
  }
  
  let rep = myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


  rep
  
  let str = 'Sdfsdf';

  console.log(str.match(/[A-Z]/));


  
function myReplace(str, before, after) {
    let regExp = new RegExp(before, 'gi');
    /*console.log(str.match(regExp));
    let s = '';
    function changePos(matched, p,a) {
         s = matched+a.replace(matched, '');
    }
     str.replace(str.match(regExp), changePos);

     return s;*/
    if (/[A-Z]/.test(before[0]))
      after = after[0].toUpperCase().concat(after.slice(1));
      
    return str.replace(regExp, after);
  }
myReplace("Let us go to the store", "store", "mall");
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"))
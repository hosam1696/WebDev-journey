
function truthCheck(collection, pre) {
    // Is everyone being true?
    /*let truth = false;
    console.log(pre);
    for (val of collection ) {
        if (val[pre]) {
            truth = true
        }else  {
            truth = false;
            break;
        }
    }*/
    return collection.every(c=>c[pre]);
  }
  
let truth =   truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
  

truth
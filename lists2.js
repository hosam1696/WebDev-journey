/*
    shortcoming of Arrays

    several reasons that arrays are not alaways the best data structure
    
    - adding and removing data 

    however these problems do not come up with jjavascript arrays
    since we can use the split() function without having to perform additional array element

    Arrays in Javascripts are implemented as Objects causing it to be less efficient than arrays built in langauges like c++ or Java
    
    

*/

function betterHash(string, arr) { const H = 37; var total = 0; for (var i = 0; i < string.length; ++i) { total += H * total + string.charCodeAt(i); } total = total % arr.length; return parseInt(total); }

function getRandomInt (min, max) {    return Math.floor(Math.random() * (max - min + 1)) + min; }
function genStuData(arr) {   for (var i = 0; i < arr.length; ++i) {      var num = "";      for (var j = 1; j <= 9; ++j) {         num += Math.floor(Math.random() * 10);      }      num += getRandomInt(50, 100);      arr[i] = num;   } 
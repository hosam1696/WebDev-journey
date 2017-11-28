function uniteUnique(...arrs) {
    let x = [];
    for (let arr of arrs) {
    x = [...x, ...arr];
    }
    return Array.from(new Set(x));
  }
  
  console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));


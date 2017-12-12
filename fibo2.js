const savedM = {};
const fibonacci = n => {
    if (n <= 2)
        return 1
    if (savedM[n])
        return savedM[n]
    return savedM[n] =  fibonacci(n-1)+ fibonacci(n-2);
}


console.log(fibonacci(100)) //35422.....000000
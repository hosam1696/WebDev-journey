let car = {name: 'Car Object'}
/*
    CONFIGURABLE: 
    means that this property can be deleted from the parent Object
    if it sets to (true)
*/
Object.defineProperty(car, 'doors', {
    enumerable: true,
    value: '4 doors',
    configurable: true,
    writable: true
})
console.log(Object.isSealed()) // true
delete car.doors
console.log(car.doors) // undefined
/*
    SEAL:
    make properties of the object configurable discriptor to false
*/


Object.defineProperty(car, 'doors', {
    enumerable: false,
    value: '4 doors',
    configurable: true,
    writable: true
})
Object.seal(car)
delete car.doors
console.log(car.doors)  // 4 doors

console.log(Object.keys(car))
console.log(
    Object.keys(car).map(p=>Object.hasOwnProperty(car,p)?p:undefined))

/*
    OBJECT FREEZE
        if the object can not be extended and its properties cannot be modified

*/

console.log([].concat.call([1,2,3],[5,4]))

console.log(!!function x(){}()) // false

console.log(Object.is(NaN,0/0), Object.is([],0)) //true false

console.log(![] == []) //true

const isEqual = (p,m) => Object.is(p,m)

console.log(isEqual(true,'0'), isEqual(![], [])) //false false


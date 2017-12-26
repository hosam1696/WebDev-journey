var Encapsulate = /** @class */ (function () {
    function Encapsulate(say) {
        this.name = 'Encapsulate Class';
        this.say = say;
    }
    return Encapsulate;
}());
var enc = new Encapsulate(true);
console.log(enc.say);

console.log(enc.name)

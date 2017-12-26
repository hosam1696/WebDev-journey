class Encapsulate {
    private name: string = 'Encapsulate Class';
    public say: boolean;
    constructor(say:boolean) {
        this.say = say;
    }
}

let enc = new Encapsulate(true)

console.log(enc.say);
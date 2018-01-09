 // classes 
class Email {
    public email: string;
    constructor(email: string) {
        if (this.validEmail(email)) {
            this.email = email;
        } else {
            throw new Error('Must be a Valid Email');
        }
    }
    validEmail(email:string):boolean {
        let re = /^\w\S+@\S+\.\S+$/;
        return re.test(email);
    }
    toString() {
        return this.email
    }
}
class Person {
    private name: string;
    private surname: string;
    public email: Email;
    constructor(name: string, surname: string, email: string) {
        this.email = new Email(email);
        this.name = name;
        this.surname = surname;
    }
    greet() {
        alert("Hi!");
    }
}
let hosam:Person = new Person('hosam elnabawy ahmed', 'ENG', 'hosamelnabawy1996@gmail.com')

console.log(hosam.email.toString());

// Interfaces
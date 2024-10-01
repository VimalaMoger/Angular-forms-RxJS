//TypeScript supports ES6 classes syntax
class Person{
    name = "Bob";
    age = 20;

    getPerson(){
        return '${this.name} ${this.age}';
    }
    whoAreYou(){
        console.log(this.name);
    }
}
let p = new Person();
p.whoAreYou();


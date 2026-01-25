// *********

const { useEffectEvent } = require("react");

// function PersonMaker(name, age){
//     const person = {
//         name: name,
//         age: age,
//         talk(){
//             console.log(`Hlw , my name is ${name}`);
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("Saurav", 20)
// let p2 = PersonMaker("Gaurav", 24)



// ***********

// Constructure - doesn't return anything & start with capital
// function Person(name, age){
//     this.name = name;
//     this.age = age;
// }

// person.prototype.talk = function (){
//     console.log(`hii, My name is ${this.name}`);
// }

// let p1 = new Person("Saurav", 20)
// let p2 = new Person("Gaurav", 24)



//********** 

// class Person{
//     constructor(name, age){
//         name = this.name;
//         age = this.age;
//     }

//     talk(){
//         console.log(`hlw, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("Adam", 20)
// let p2 = new Person("Eve", 24)



// ***********

// class Person{
//     constructor(name, age){
//         console.log("person class constructor");
//         this.name = name;
//         this.age = age;
//     }

//     talk(){
//         console.log(`Hlw, my name is ${this.name}`);
//     }
// }
// class Student{
//     constructor (name, age, marks){
//         console.log("student class constructor");
//         super(name, age);   // parent class constructor is being called 
//         this.marks = marks;
//     }
    
// }


// class Teacher{
//     constructor (name, age, subject){
//         super(name, age);   // parent class constructor is being called
//         this.subject = subject;
//     }
//     talk(){
//         console.log(`Hlw, my name is ${this.name}`);
//     }
// }

// let stud1 = new Student("Saurav", 20, 78);



// ***********

class Mammal {      // base class / parent
    constructor(name){
        this.name = name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am eating...");
    }
}

class Dog extends Mammal{       // child
    constructor(name){
        super(name);
    }
    bark(){
        console.log("woof...");
    }
}

class cat extends Mammal{       // child
    constructor(name){
        super(name);
    }

    meow(){
        console.log("meow....");
    }
}
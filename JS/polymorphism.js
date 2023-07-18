
// parent class 
class Animal {
    constructor(name){
        this.name = name;
        
    }
    
    // regular method 
    makeSound (){
        console.log("The Dog is barking from the house! ")
        
    }
}

// child class
class Cat extends Animal {
    constructor(name){
        super(name)
    }

    //regular method with the same name from the parent class 
    //the super pulls from the parent class 
    makeSound (){
        super.makeSound();
        console.log("The Cat is looking from the Tree!")
    }
} 

//instantiation

let animal1 = new Animal("Mellow");
let cat1 = new Cat("Tina")


cat1.makeSound();
animal1.makeSound();


















// // Parent class
// class Animal {
//     constructor(name){
//         this.name = name;
//     }

//     //regular method 
//     makeSound (){
//         console.log("The Dog is barking from the house");
//     }
// }

// //child class 
// class Cat extends Animal {
//     constructor(name){
//         super(name);
//     }

//     makeSound(){
//         // calling the parent method inside of the derived method
//         super.makeSound();
//         console.log(" The cat is looking from the tree!");
//     }
// }

// let animal1 = new Animal("mellow");
// let cat1 = new Cat("tina");

// cat1.makeSound();
// animal1.makeSound();
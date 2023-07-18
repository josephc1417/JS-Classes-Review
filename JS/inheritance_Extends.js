// when you have a parent class to create a child class 
// Person is going to be the parent class (Programer) is going to be the child class 
//* we can use >> extends << on the child class that will inherit the attributes from the parent class 
// child class will have the same parameters within the constructor as the parent 
//* (super) will call on the constructor from the parent class to retrieve its instance variables 





//1.Parent class 
class Person {
    constructor(_name, _age){
        this.name = _name;
        this.age = _age;
    }

    describe () {
        console.log(`I am ${this.name} and I am ${this.age} years old `)
    }
}


//2.Child class
class Programmer extends Person {
    constructor(_name, _age, _yearsOfExperience){
        super(_name, _age)
        
        //custom behavior 
        this.yearsOfExperience = _yearsOfExperience;
    }

    code() {
        console.log(`${this.name} is coding`);
    }
}


//********** Instantiation  *************** */


const programers = [
    new Programmer("Jason", 56 ,12),
    new Programmer("Bill",29, 10)
]
// let person1 = new Person("jeff",45);
// let programmer1 = new Programmer("joe",33, 1);

// console.log(person1);
// console.log(programmer1);

// programmer1.code();// .code method is specific to the child class
// programmer1.describe();// used (.describe()) method from parent class 




//*3. function that will take in (programers) as a parameter
// loop through the programmers array 
function developSoftware(programers){
    //Develope Software
    for (let programmer of programers) {
        programmer.code();
    }
}

//function call >> developSoftware() << and pass in programmers[] array as an argument 
developSoftware(programers);
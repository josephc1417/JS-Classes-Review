
/* class ->

Instance properties: what they have
- name 
- age
- height

Instance Methods: what they do

- talk 
- run 
- jump

*/


/* 
class 
constructor (arguments)
instance variables ( you can also make these private with an underscore)
getters - return instance values (this)
setters - 

*/








// const age = 21;
// class Rectangle {
// // setup 
// constructor(height, width, color) {    
//     console.log("The Rectangle is being created")
//     this._height = height;
//     this._width = width;
//     this._color = color;
// }

// //usually will return a value
// getArea () {
//      return this._width * this._height;
// }


// // print description method (regular method using template literal)
// printDescription () {
//     console.log(`I am a rectangle of ${this._width} x ${this._height} and I am ${this._color}`)
// }



// }

// // call the new obj instance by the created obj name followed by the method you want to call on it)


// let myRectangle = new Rectangle(10,20,"blue");
// let myRectangle2 = new Rectangle(15,25,"green");
// console.log(myRectangle);
// console.log(myRectangle2);

// console.log(myRectangle2.getArea());
// console.log(myRectangle.getArea()/20);
// console.log(myRectangle.getArea()/20* age);
// myRectangle.printDescription();



class Square {

    constructor(_width){
        this.width = _width;
        this.height = _width;
        this.numberOfRequestForArea = 0;
    }


    // Getter Method 
    get area () {
        this.numberOfRequestForArea++;
        return this.width * this.height;
    }

    //Setter Method
    // Assign new values to your instance properties
    //setting the new value for the (this.width) and (this.height)
    // you are going to use the return value of your getter method (area) as your argument for your setter method

    set area (area) {
     this.width = 25 + 30 * area; 
     this.height = this.width;  
    }
}

let newSquare = new Square(25);
console.log(newSquare.area)
console.log(newSquare.area)
console.log(newSquare.area)
console.log(newSquare.area)
console.log(newSquare.width)
console.log(newSquare.height)

console.log(newSquare.numberOfRequestForArea);


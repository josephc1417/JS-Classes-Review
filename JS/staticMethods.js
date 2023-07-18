// Static methods do not require an instance in-order for it to be used
//AKA (HELPER METHOD)
// This method is not bound to a object 
// Use _ to make instance variables viewable but but not able to be modified

//1. Create a (static method) that determines if the area of two different Square instances are equal
//2. Call the static method on the (Square class) and not the (square instance) 
//3. You will be returning a boolean value, but the return statement should not include the (this keyword) since the method is not being called on an instance
//*4.Create a method that test if the square is valid (equal width & height)



class Square {
    constructor(_width) {
        this.width = _width;
        this.height = _width;
        
    }

    // static method
    // parameters (a,b) = (square instance 1, square instance 2)
    static equals (a,b) {
        return a.width * a.height === b.width * b.height;
    }
    
    
    
    // return boolean statement will use a ternary operator>> if (w*h(a)) <<return (comparison result )
    static valid (width, height) {
       return  width === height;
        }
    }




let square1 = new Square(9);
let square2 = new Square(9);
console.log(square1);


//*Calling and logging the>>  .equals() method  <<directly on the (Square Class itself)>>   Square.equals(square1, square2)   <<*/
console.log(Square.equals(square1, square2));
console.log(Square.valid(7,6));
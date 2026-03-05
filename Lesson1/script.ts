// Basic types 
// numbers string  and boolean
// any unknown never and void enums
let age : number ; 
let age1 : number = 30;
let arr : [string , number ] = ["hello" , 30 ] ; // example of tuple
let apple : any ; // so apple can be anything number boolen or string
apple = 12;
apple = "hello" ;
apple = true ;
let banana : unknown; // not sure about the type of banana
banana = 12;
banana = "hello" ;
banana = true ;
function numberFunction() : number {
    return 12 ;
} //so have to mention the type of the return value of the function
function voidFunction() : void {
    console.log("this function does not return anything");
} // so this function does not return anything


 enum direction { //  to define a set of same constants
    top = "TOP",
    bottom = "BOTTOM",
    left = "LEFT",
    right = "RIGHT",
 }
 console.log(direction.top);
 console.log(direction.bottom);
 console.log(direction.left);
 console.log(direction.right);
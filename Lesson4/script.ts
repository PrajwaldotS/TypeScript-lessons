// type aliases in which two are the primitive types alias and the other is the object type alias

//primitive type alias
type name = string;
type age = name ;
// object type alias
type User = {
    name : string ;
    age : number ;
    email:string;
}
let prajwal : User = {
    name: "Prajwal",
    age: 25,
    email: "prajwal@example.com"
} // valid, prajwal has properties of User type

type Age = number | string ; // union type alias for age that can be either a number or a string
let myAge : Age = 12;
let herAge : Age = "twelve"
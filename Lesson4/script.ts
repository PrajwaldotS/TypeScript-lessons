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
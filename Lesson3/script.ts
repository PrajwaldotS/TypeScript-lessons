let a : number | string ; // Union type | this means it can be either a number or a string
a = 10; // valid
a = "Hello"; // valid
// a = true; // invalid, boolean is not assignable to number or string


type city = {
    name: string;
    population: number;
}
type planet = {
    name:string;
    cities:number;
}
type location = city & planet; // Intersection type for location that is both a city and a planet
let value : location = {
    name:"Earth",
    population: 100,
    cities: 5
} // valid, value has properties of both city and planet
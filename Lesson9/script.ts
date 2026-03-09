// Named fucntion is a function that has a name and can be called by its name. It is defined using the function keyword followed by the function name and parentheses. The function body is enclosed in curly braces.
function add(a: number, b: number): number {
    return a + b;
}
// anonymous function is a function that does not have a name and cannot be called by its name. It is defined using the function keyword followed by parentheses. The function body is enclosed in curly braces. It is usually assigned to a variable or passed as an argument to another function.
let subtract = function(a: number, b: number): number {
    return a - b;
}
// arrow function is a function that is defined using the arrow syntax. It is a shorter syntax for writing functions and it does not have its own this keyword. It is usually assigned to a variable or passed as an argument to another function.
let multiply = (a: number, b: number): number => {
    return a * b;
}
// Explicit return type function is a function that has a return type specified. It is defined using the function keyword followed by the function name and parentheses. The return type is specified after the parentheses using a colon. The function body is enclosed in curly braces.
function divide(a: number, b: number): number {
    return a / b;
}
// Implicit return type function is a function that does not have a return type specified. It is defined using the function keyword followed by the function name and parentheses. The function body is enclosed in curly braces. The return type is inferred by the TypeScript compiler based on the return statements in the function body.
function greet(name: string) {
    return `Hello, ${name}!`;
}
// Optional return type function is a function that may or may not return a value. It is defined using the function keyword followed by the function name and parentheses. The return type is specified after the parentheses using a question mark. The function body is enclosed in curly braces. The return type is inferred by the TypeScript compiler based on the return statements in the function body.
function user(name:string , age:number , gender?:string) {
    console.log(`Name: ${name}, Age: ${age}, Gender: ${gender}`);
}
user('Shhruzz', 20); // we can call the function without passing the
// ? make it optional which means it can be passsed or not when calling the function.  


// default parameter is a parameter that has a default value. It is defined using the function keyword followed by the function name and parentheses. The default value is specified after the parameter name using an equals sign. The function body is enclosed in curly braces. If the caller does not provide a value for the parameter, the default value will be used.
function greetUser(name: string = "Guest") {
    return `Hello, ${name}!`;
}
// rest parameter is a parameter that allows a function to accept an indefinite number of arguments as an array. It is defined using the function keyword followed by the function name and parentheses. The rest parameter is specified using three dots followed by the parameter name. The function body is enclosed in curly braces.
function sum(...numbers: number[]): void {
    console.log(numbers)
}

sum(1,2,3,4,5)  // "...numbers" will take all the arguments passed to the function and store them in an array called "numbers". We can then use this array to perform operations on the arguments passed to the function. In this case, we are just logging the array of numbers to the console. The return type of this function is void because it does not return anything.

//the default return typeof function is void because it does not return anything but we can also specify the return type of a function by using the syntax functionName(): returnType 
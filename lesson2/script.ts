let a ; //now the type of a is any which is assumned by typescript but it is not a good practice to use any type because it can lead to bugs in the code
let b = 12 ; // now the type of b is number which is inferred by typescript
let c : number ; // now the type of c is number which is explicitly mentioned by us
// when the type script assume the type of a varibale or constant when he havent explicitly mentioned is called as type inference
// when we explicitly mention the type of a variable or constant is called as type annotation
let varibale : string | null ;
varibale = "hello" ;
varibale = null ; // so we can assign null to varibale because we have mentioned that it can be string or null
function random(variable : string | number ) {
    if (typeof variable === "string"){
        console.log(variable.toUpperCase())
    }
    else if (typeof variable  ===  "number" ){
        console.log(variable.toFixed(2))
    }
}
random("hello") ;
random(12) ; // i can use the same function for both string and number because we have mentioned that the type of variable can be string or number
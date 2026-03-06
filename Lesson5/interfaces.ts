// the difference between type and interface is that interface can be extended and implemented, while type cannot be extended or implemented and in interface "=" is not used but ion type "=" is used to define a type alias

type User = string;

interface human {
    name: string;
}
interface human {
    age: number;
}

function nameHuman (human:human) {
    return human.name;
    return human.age; // so we can access both name and age properties of human interface because we have defined them in the same interface
}

// example of extending an interface

interface Student extends human{
    grade:number;
    SchoolName:string;
}
function nameStudent(student:Student){
    console.log(student.name);
    console.log(student.age);
    console.log(student.grade);
    console.log(student.SchoolName);
} // so we can access all the properties of human interface in student interface because we have extended human interface in student interface
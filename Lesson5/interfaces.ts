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
class abcd{
    constructor(public readonly name:string){
        this.name = name;
    }
    getName(){console.log(this.name);}
    setName(name:string){
        // this.name = name;
    }
} // this will give an error because we are trying to change the value of a readonly property. We can only set the value of a readonly property in the constructor and we cannot change it later. We can only read the value of a readonly property but we cannot change it.

class Animal{
    constructor(public name:string){
        this.name = name;
    }
    get animalName(): string{
        return this.name;
    }
    set animalName(name:string){
        this.name = name;
    }
}
let dog = new Animal("Dog");
dog.animalName = "Cat"; // we can change the name of the animal using the setter method and we can get the name of the animal using the getter method.
console.log(dog.animalName);
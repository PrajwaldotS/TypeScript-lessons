//access modifiers
//public: can be accessed from anywhere this is the default access modifier can be accessed from anywhere(outside the class and inside the class)
//private: can only be accessed within the class can be accessed only within the class and not outside the class or in subclasses
//protected: can be accessed within the class and its subclasses can be accessed within the class and its subclasses but not outside the class can be used in that class and its extented classe also 
//methods (fucntion) can also be public private or protected
class speaker{
    public company: string;
    public price: number = 25000;
    constructor(name:string, price:number){
        this.company = name;
        this.price = price;
    }
}
let Boat = new speaker("Boat", 30000);
let Bose = new speaker("Bose", 50000);



class User {
    private Balance: number = 5000;
    constructor(balance:number){
        this.Balance = balance;
        console.log(this.Balance);
    }
}
let user1 = new User(10000); //we can chnage the balance now but when we run it would run also but witha an error because we are trying to access a private property outside the class. We can only access it within the class.



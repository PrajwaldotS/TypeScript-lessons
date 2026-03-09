class Speaker {
    price = 25000;
    image = "images/airpod.jpg"
    color = "white";
    volume = 10;

    playMusic(){
        console.log("Playing music...");
        console.log(this.color);
    }
    rasieVolume(){
        this.volume += 1;
        console.log(`Volume is now ${this.volume}`);
    }
    decreaseVolume(){
        this.volume -= 1;
        console.log(`Volume is now ${this.volume}`);
    }
}
// so we have defined a class called Speaker with three properties price, image and color and two methods playMusic and switchMode and we can rasie or decrease the volume of the speaker using the rasieVolume and decreaseVolume methods. Now we can create an instance of the Speaker class and call its methods.

let boat = new Speaker(); //new key word is called as constructor and it is used to create an instance of the class. We can also pass parameters to the constructor to initialize the properties of the class.
boat.playMusic();
boat.rasieVolume();
boat.decreaseVolume();

let sony = new Speaker();
sony.playMusic();
sony.rasieVolume();
sony.decreaseVolume();
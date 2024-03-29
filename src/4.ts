class Key {
    private signature: number;

  constructor() {
    this.signature = Math.random();
  }
    getSignature():number{
return this.signature
    }
}

class Person{
    private key: Key;
    constructor(key:Key){
this.key = key
    }
    getKey():Key{
return this.key
    }
}

abstract class House{
    protected key: Key;
    protected doorOpen: boolean = false;
    protected tenants: Person[] = [];

   constructor(key:Key){
    this.key = key
   }
   
   abstract openDoor(key:Key): void;

   comeIn(person: Person): void {
    if (this.doorOpen) {
      this.tenants.push(person);
      console.log(`Welcome ${person}`);
    } else {
      console.log(`The door is closed`);
    }
  }
}

class MyHouse extends House{
constructor(key:Key) {
    super(key)
}
openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
        this.doorOpen = true;
      console.log('Opened');
    } else {
      console.log('Invalid key');
    }
  }

}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
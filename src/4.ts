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
   constructor(key:Key){
    this.key = key
   }
   abstract openDoor(key:Key): void;
}

class MyHouse extends House{
constructor(key:Key) {
    super(key)
}
openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      console.log('Opened');
    } else {
      console.log('Invalid key');
    }
  }
  comeIn(person){
console.log(`Welcome ${person}`);
  }
}



const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};
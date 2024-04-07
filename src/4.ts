class Key {
    private signature: number;
    constructor() {
        this.signature = Math.floor(Math.random() * 1000000000);
    }

    getSignature(): number {
        return this.signature;
    }
}

class Person {
    constructor(private key: Key) {}

    getKey(): Key {
        return this.key;
    }
}

abstract class House {
    protected door: boolean;
    protected key: Key;
    protected tenants: Person[];
    public abstract comeIn(person: Person): void;
    public abstract openDoor(key: Key): void;
}

class MyHouse extends House {
    constructor(protected key: Key) {
        super();
        this.door = false;
        this.tenants = [];
    }

    public openDoor(key: Key): void {
        if (this.door) return; // door is already open

        if (key === this.key) this.door = true;
        else console.log('Sorry, this is invalid key!');
    }

    public comeIn(person: Person): void {
        if (this.door) this.tenants.push(person);
        else console.log('First you have to open the door!');
    }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};

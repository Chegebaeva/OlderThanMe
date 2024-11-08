
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    olderThan(otherPerson) {
        return this.age > otherPerson.age;
    }
}

// Example usage:
const alice = new Person("Alice", 20);
const bob = new Person("Bob", 25);
const anna = new Person("Anna", 26);

console.log(alice.olderThan(bob));
console.log(bob.olderThan(alice));
console.log(anna.olderThan(bob)); 

// function Animal ( name, energy ) {
//     let animal = Object.create(Animal.prototype);
//     animal.name = name;
//     animal.energy = energy;

//     return animal;
// }

// Animal.prototype.eat = function (amount) {
//     console.log(`${this.name} is eating.`);
//     this.energy += amount;
// }

// Animal.prototype.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`);
//     this.energy += length;
// }

// Animal.prototype.play = function (length) {
//     console.log(`${this.name} is playing.`);
//     this.energy += length;
// }

// const leo = Animal('Leo', 7);

// const snoop = Animal('snoop', 10);


//This Can also done by creating class

class Animal {
    constructor(name,energy) {
        this.name = name;
        this.energy = energy;
    }
    eat(amount) {
        console.log(`${this.name} is eating`);
    }
    sleep(length) {
        console.log(`${this.name} is eating`);
    }
    play(length) {
        console.log(`${this.name} is eating`);
    }
}
const leo = new Animal('leo',7);

// const dog = {
//     legs: 4,
//     ears: 2,
//     sound: "bark",
// };
// const pig = {
//     legs: 1000,
//     ears: 2,
//     sound: "bark",
// };

// class Animal {
//     constructor(legs, ears, sound) {
//         this.legs = legs;
//         this.ears = ears;
//         this.sound = sound;

//     }

// }

// const dogC = new Animal(4, 2, "bark");
// const pigC = new Animal(1000, 2, "bark");

// console.log(dogC,pigC);

const Bulbasaur = {
    type: 'grass',
    element: 'wind'
};

const Squirtel = {
    type: 'water',
    element: 'water'
}

class Pokemon {
    constructor (type,element) {
        this.type = type,
        this.element = element
    } 
    
}

const bulbasaurC = new Pokemon ('grass', 'wind')
const SquirtelC = new Pokemon ('sea', 'water')

console.log(bulbasaurC, SquirtelC);

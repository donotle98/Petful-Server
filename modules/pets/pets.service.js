const Queue = require("../queue/Queue");
const store = require("../../store");
const { dogs, cats } = require("../../store");

// Set up initial data.
// --------------------

const pets = {
    cats: new Queue(),
    dogs: new Queue(),
};

store.cats.forEach((cat) => pets.cats.enqueue(cat));
store.dogs.forEach((dog) => pets.dogs.enqueue(dog));

// --------------------

module.exports = {
    get(type) {
        // Return the pets next in line to be adopted.
        if (type === "dogs") {
            return pets.dogs.show();
        }
        if (type === "cats") {
            return pets.cats.show();
        }
        return pets;
    },

    dequeue(type) {
        // Remove a pet from the queue.
        if (type === "dogs") {
            pets.dogs.dequeue();
            return pets.dogs.all();
        }
        if (type === "cats") {
            pets.cats.dequeue();
            return pets.cats.all();
        }
        return pets;
    },
};

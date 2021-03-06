const Queue = require("../queue/Queue");
const store = require("../../store");

// Set up initial data.
// --------------------

const people = new Queue();
store.people.forEach((person) => people.enqueue(person));

// --------------------

module.exports = {
    get() {
        // Return all people in the queue.
        return people.all(people);
    },

    enqueue(person) {
        // Add a person to the queue.
        people.enqueue(person);
        return people.all(people);
    },

    dequeue() {
        // Remove a person from the queue.
        people.dequeue();
        return people.all(people);
    },

    getCount() {
        return people.getCount();
    },
};

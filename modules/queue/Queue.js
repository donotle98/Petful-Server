class _Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor() {
        // Set initial data.
        this.first = null;
        this.last = null;
    }

    enqueue(data) {
        // Add some data to the queue.
        const node = new _Node(data);

        if (this.first === null) {
            this.first = node;
        }

        if (this.last) {
            this.last.next = node;
        }
        //make the new node the last item on the queue
        this.last = node;
        return node.value;
    }

    dequeue() {
        // Remove some data from the queue.
        //if the queue is empty, there is nothing to return
        if (this.first === null) {
            return;
        }
        const node = this.first;
        this.first = this.first.next;
        //if this is the last item in the queue
        if (node === this.last) {
            this.last = null;
        }
        return node.value;
    }

    show() {
        // Return the next item in the queue.
        if (!this.first === null) {
            return null;
        }
        return this.first.next;
    }

    all(queue) {
        // Return all items in the queue.
        let arr = [];
        let node = queue.first;
        while (node) {
            arr.push(node.value);
            node = node.next;
        }
        return arr;
    }

    getCount() {
        let count = 0;
        let temp = this.first;
        while (temp !== null) {
            count++;
            temp = this.next;
        }
        return count;
    }
}

module.exports = Queue;

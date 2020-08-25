/* ========== QUEUE ========== */

class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }
}

const queue = new Queue();

queue.enqueue("Eugene");
queue.enqueue("Peter");
// queue.enqueue("Maestrado");

queue.dequeue();
// queue.dequeue();

console.log(queue);

// const queue = [];

// // enqueue
// queue.push("Eugene");
// queue.push("Peter");
// queue.push(" Maestrado");

// // dequeue
// queue.shift();

// console.log(queue);

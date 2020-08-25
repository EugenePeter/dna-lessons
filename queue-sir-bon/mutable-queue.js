class MutableQueue {
    constructor() {
        this.count = 0;
        this.dequeued_count = 0;
        this.data = {};
    }

    enqueue(queue_id, data) {
        const count = this.count;
        this.data[count] = data;
        this.count++;
    }

    dequeue() {
        if (this.dequeued_count === this.count) {
            return null;
        }

        const data = this.data[this.dequeued_count];
        this.dequeued_count++;

        return data;
    }

    state() {
        return this.data;
    }

    peek() {
        if (this.dequeued_count === this.count) {
            return null;
        }

        const data = this.data[this.dequeued_count];
        this.dequeued_count++;

        return data;
    }

    replay(count) {
        if (count > this.count) {
            throw new Error("Out of Bounds");
        }

        this.dequeued_count = count;
    }

    set(index, data) {
        if (index > this.count) {
            throw new Error("Out of Bounds");
        }

        this.data[index] = data;
    }
}

const QueueInstance = new MutableQueue();

QueueInstance.enqueue(10);
QueueInstance.enqueue(2);
QueueInstance.enqueue(30);
// QueueInstance.enqueue(60);
// QueueInstance.enqueue(30);
// QueueInstance.enqueue(100);

const peek = QueueInstance.peek();
console.log(`Peeked`, peek);
console.log(`State`, QueueInstance.state());

console.log(`Dequeued`, QueueInstance.dequeue());
console.log(`State`, QueueInstance.state());

// console.log(`Dequeued`, QueueInstance.dequeue());
// console.log(`State`, QueueInstance.state());

// console.log(`Dequeued`, QueueInstance.dequeue());
// console.log(`State`, QueueInstance.state());

// console.log(`Dequeued`, QueueInstance.dequeue());
// console.log(`State`, QueueInstance.state());

// console.log(`Dequeued`, QueueInstance.dequeue());
// console.log(`State`, QueueInstance.state());

// QueueInstance.set(1, 20);
// QueueInstance.replay(0);

// console.log(`Dequeued`, QueueInstance.dequeue());
// console.log(`State`, QueueInstance.state());

// console.log(`Dequeued`, QueueInstance.dequeue());
// console.log(`State`, QueueInstance.state());

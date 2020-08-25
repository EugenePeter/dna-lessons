class PassingQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(data) {
        this.queue.push(data);
    }

    dequeue() {
        const data = this.queue.shift();

        if (data) {
            return data;
        } else {
            return null;
        }
    }

    state() {
        return this.queue;
    }

    peek() {
        return this.queue[0] || null;
    }
}

const QueueInstance = new PassingQueue();

QueueInstance.enqueue(10);
QueueInstance.enqueue(2);
QueueInstance.enqueue(30);

const peek = QueueInstance.peek();
console.log(`Peeked`, peek);
console.log(`State`, QueueInstance.state());

console.log(`Dequeued`, QueueInstance.dequeue());
console.log(`State`, QueueInstance.state());

console.log(`Dequeued`, QueueInstance.dequeue());
console.log(`State`, QueueInstance.state());

console.log(`Dequeued`, QueueInstance.dequeue());
console.log(`State`, QueueInstance.state());

console.log(`Dequeued`, QueueInstance.dequeue());
console.log(`State`, QueueInstance.state());

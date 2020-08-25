const EventEmmitter = require("events");
const { PassThrough } = require("stream");
let ArrOfResults = [];

const emmitter = new EventEmmitter();

const evaluateProcessA = (data) => {
    let result = false;
    if (data == 1) {
        result = true;
    }

    ArrOfResults.push({
        step: "A",
        number: Math.random() * 100,
        result,
    });

    console.log(ArrOfResults);
    emmitter.emit("done_a");
};

const evaluateProcessB = () => {
    const data = ArrOfResults.pop();
    let result = false;
    if (data.number == 1) {
        result = true;
    }

    ArrOfResults.push({
        step: "B",
        number: Math.random() * 100,
        result,
    });

    emmitter.emit("done_b");
};

const evaluateProcessC = () => {
    const data = ArrOfResults.pop();
    let result = false;
    if (data.number == 1) {
        result = true;
    }

    ArrOfResults.push({
        step: "C",
        number: Math.random() * 100,
        result,
    });

    // throw new Error("MyCustomError");

    emmitter.emit("done_c");
};

const evaluateProcessD = () => {
    const data = ArrOfResults.pop();
    let result = false;
    if (data.number == 1) {
        result = true;
    }

    ArrOfResults.push({
        step: "D",
        number: Math.random() * 100,
        result,
    });

    emmitter.emit("done_d");
};

const business_process = (data) => {
    emmitter.on("start", () => evaluateProcessA(data));
    emmitter.on("done_a", () => evaluateProcessB());
    emmitter.on("done_b", () => evaluateProcessC());
    emmitter.on("done_c", () => evaluateProcessD());
    emmitter.on("done_d", () => {
        console.log("Done", ArrOfResults);
    });

    emmitter.emit("start");
};

business_process(100);

/* ========== STACK ========== */

// class Stack {
//     constructor() {
//         this.storage = {};
//         this.size = 0;
//     }

//     push(element) {
//         this.size++;
//         this.storage[this.size] = element;
//     }

//     pop() {
//         let removed = this.storage[this.size];
//         delete this.storage[this.size];
//         this.size--;
//         return removed;
//     }

//     peek() {
//         return this.storage[this.size];
//     }
// }

// const stack = new Stack();

// stack.push("Softwar engineer");
// stack.push("UX Designer");
// stack.push("Fullstack Developer");
// stack.pop();

// stack.peek();

// console.log(this.storage);

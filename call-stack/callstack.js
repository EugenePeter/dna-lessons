let stack_size = 0;
let stack_limit = 500;

function fibonacci_recursive(num) {
    // if( stack_size > stack_limit ) {
    //   throw new Error("Stack Overflow")
    // }

    stack_size++;
    // console.log(`CurrentStack: ${stack_size}`, stack_size > stack_limit ? "OverFlow": null)

    if (num <= 1) {
        stack_size--;
        return 1;
    } else {
        return fibonacci_recursive(num - 1) + fibonacci_recursive(num - 2);
    }
}

function fibonacci_loop(num) {
    var a = 1,
        b = 0,
        temp;

    if (stack_size > stack_limit) {
        throw new Error("Stack Overflow");
    }

    stack_size++;
    // console.log(`CurrentStack: ${stack_size}`)s

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }

    stack_size--;
    return b;
}

const num = fibonacci_recursive(1000);

console.log(num);

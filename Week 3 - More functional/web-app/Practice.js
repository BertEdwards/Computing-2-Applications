// Function to implement factorial 
const factorial = function (x) {
    if (x === 0){
        return 1;
    }

    else {
        return x * factorial(x - 1);
    }
};



// Fibonacci numbers
const fibonacci = function (x) {
    if (x === 0) {
        return 0;
    }
    if (x === 1) {
        return 1;
    }
    else {
        return fibonacci(x-1) + fibonacci(x-2)
    }

};



// Lucas numbers
const lucas = function (x) {
    if (x === 0) {
        return 2;
    }
    if (x === 1) {
        return 1;
    }
    else {
        return lucas(x-1) + lucas(x-2)
    }

};



// fibonacci-like
const fibonacci_like = function (y,z) {
    
    return {fibonacci2 = function (x) {

    if (x === 0) {
        return y;
    }
    if (x === 1) {
        return z;
    }
    else {
        return fibonacci2(x-1) + fibonacci2(x-2)
    }}}

};

const create_adder = (x) => {
    return (y) => x + y;
};

const adder_too = (z) => {
    return
}


debugger;



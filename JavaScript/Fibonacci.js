function generateFibonacci(n) {
    const fibonacciNumbers = [1, 1];

    for (let i = 2; i < n; i++) {
        fibonacciNumbers[i] = fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2];
    }

    return fibonacciNumbers;
}

// Get the first 100 Fibonacci numbers
const first100Fibonacci = generateFibonacci(100);
console.log(first100Fibonacci);

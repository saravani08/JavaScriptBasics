
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}


const randomNumbers = Array.from({ length: 100 }, () => getRandomNumber(1, 1000));

const maxNumber = Math.max(...randomNumbers);
console.log("Largest number: " + maxNumber);


const minNumber = Math.min(...randomNumbers);
console.log("Smallest number: " + minNumber);


const evenCount = randomNumbers.filter(num => num % 2 === 0).length;
const oddCount = randomNumbers.length - evenCount;
console.log(evenCount > oddCount ? "Even count is higher." : "Odd count is higher.");

const sum = randomNumbers.reduce((acc, num) => acc + num, 0);
const average = sum / randomNumbers.length;
console.log("Sum: " + sum);
console.log("Average: " + average.toFixed(2));

function reverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
}


const myArray = [1, 2, 3, 4, 5];
reverseArray(myArray);
console.log(myArray); 

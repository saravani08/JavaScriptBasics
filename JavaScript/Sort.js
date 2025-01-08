function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}


const arrayToSort = [5,1,3,2,4,7,11,10,15];
const sortedArrayBubbleSort = bubbleSort([...arrayToSort]);
console.log("Sorted Array (Bubble Sort):", sortedArrayBubbleSort);

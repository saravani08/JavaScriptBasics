function rotateListWithCount(arr, k) {
    const n = arr.length;
    let count = 0;

    function reverseArray(start, end) {
        while (start < end) {
            const temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
            count++;
        }
    }

    k = k % n;

    reverseArray(0, n - 1);
    reverseArray(0, k - 1);
    reverseArray(k, n - 1);

    console.log(`Number of moves: ${count}`);
}

const myList = [1, 2, 3, 4, 5, 6];
const rotations = 2;

rotateListWithCount(myList, rotations);
console.log(myList);

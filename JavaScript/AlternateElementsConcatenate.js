function combineAlternately(arr1, arr2) {
    let combinedArray = [];
    const minLength = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < minLength; i++) {
        combinedArray.push(arr1[i]);
        combinedArray.push(arr2[i]);
    }

    // Concatenate the remaining elements from the longer array, if any
    combinedArray = combinedArray.concat(arr1.slice(minLength), arr2.slice(minLength));

    return combinedArray;
}

// Example usage:
const array1 = ['a', 'b', 'c'];
const array2 = [1, 2, 3];
const result = combineAlternately(array1, array2);
console.log(result);

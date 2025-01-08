function sumUsingForLoop(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s;
}

function sumUsingWhileLoop(arr) {
    let s1 = 0;
    let i = 0;
    while (i < arr.length) {
        s1 += arr[i];
        i++;
    }
    return s1;
}
function sumUsingDoWhileLoop(arr) {
    let s2 = 0;
    let i = 0;
    do {
        s2 += arr[i];
        i++;
    } while (i < arr.length);
    return s2;
}
const n = [1, 2, 3, 4, 5];
console.log(sumUsingForLoop(n));    
console.log(sumUsingWhileLoop(n));    
console.log(sumUsingDoWhileLoop(n));  

// Initialize an array
let numbers = [10, 20, 30, 40, 50];

// 1. push - Adds an element to the end of the array
numbers.push(60);
console.log("After push:", numbers); // [10, 20, 30, 40, 50, 60]

// 2. pop - Removes the last element from the array
const popped = numbers.pop();
console.log("After pop:", numbers); // [10, 20, 30, 40, 50]
console.log("Popped element:", popped); // 60

// 3. shift - Removes the first element from the array
const shifted = numbers.shift();
console.log("After shift:", numbers); // [20, 30, 40, 50]
console.log("Shifted element:", shifted); // 10

// 4. unshift - Adds an element to the beginning of the array
numbers.unshift(10);
console.log("After unshift:", numbers); // [10, 20, 30, 40, 50]

// 5. splice - Adds/removes elements from the array
numbers.splice(2, 1, 25); // Remove 1 element at index 2, and add 25
console.log("After splice:", numbers); // [10, 20, 25, 40, 50]

// 6. slice - Returns a shallow copy of a portion of an array
const sliced = numbers.slice(1, 4); // Slice from index 1 to 4 (exclusive)
console.log("Sliced array:", sliced); // [20, 25, 40]

// 7. map - Creates a new array with the results of calling a function on every element
const doubled = numbers.map(num => num * 2);
console.log("Doubled array:", doubled); // [20, 40, 50, 80, 100]

// 8. filter - Creates a new array with all elements that pass the test implemented by the provided function
const filtered = numbers.filter(num => num > 25);
console.log("Filtered array (greater than 25):", filtered); // [40, 50]

// 9. reduce - Executes a reducer function on each element of the array, resulting in a single output value
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of array:", sum); // 155

// 10. forEach - Executes a provided function once for each array element
console.log("Array elements:");
numbers.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

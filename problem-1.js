//^ Given that the Array of fruit
let fruits = ["Apple", "Banana", "Orange"];

//* a) Find the index of 'Banana' and replace it with 'Mango'

//todo: Resquirement - i

let findBanana = fruits.indexOf("Banana");
console.log(findBanana);

//todo: Resquirement - ii

// Website link: https://www.geeksforgeeks.org/how-to-replace-an-item-from-an-array-in-javascript/

//? Method 1: Using Array Indexing
/*
let index = 1;
let newValue = "Mango";
fruits[index] = newValue;
console.log(fruits);
*/

//? Method 2: Using the splice() Method

fruits.splice(1, 1, "Mango");
console.log(fruits);

//? Method 3: Using array map() and filter() Methods

//* b) Remove 'Orange' and add 'Watermelonq'.

let lastFruit = fruits.pop();
let addLastFruit = fruits.push("Watermelon");
console.log(fruits);

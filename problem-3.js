//* Problem - 01

let num1 = 13;
let num2 = 79;
let num3 = 100;

if (num1 > num2 && num1 > num3) {
  console.log("The largest number is num1 " + num1);
} else if (num1 < num2 && num2 > num3) {
  console.log("The largest number is num2 " + num2);
} else {
  console.log("The largest number is num3 " + num3);
}

//* Problem - 02

let side1 = 9;
let side2 = 8;
let side3 = 9;

if (side1 == side2 || side1 == side3 || side2 == side3) {
  console.log("isosceles");
}

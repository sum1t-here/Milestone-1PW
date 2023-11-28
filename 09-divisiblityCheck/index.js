// Write a program that takes an array of numbers and prints all the numbers that are divisible by 3, but not by 2. Use a for loop and continue statement.

const numbers = [1, 3, 4, 5, 6, 9, 0, 21, 12, 30, 4];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 3 == 0 && numbers[i] % 2 != 0) {
    console.log(numbers[i]);
  }
}

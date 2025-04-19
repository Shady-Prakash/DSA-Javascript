// Array Methods

let arr = ["apple", "banana", "cherry", "Lemon"];

1.// Push() - Add an element at the end of an array
arr.push("orange")
console.log(arr); // ["apple", "banana", "cherry", "Lemon", "orange"]


2.// Pop() - Remove the end element of an array.
arr.pop();
console.log(arr); // ["apple", "banana", "cherry"]


3.// unShift() - Add an element at the start of an array
arr.unshift("orange");
console.log(arr); // ["orange", "apple", "banana", "cherry", "Lemon"];


4.// Shift() - Remove the first element of an array
arr.shift("orange");
console.log(arr); // ["apple", "banana", "cherry", "Lemon"];


5.//  Map and forEach - The main difference between forEach() and map() is that map() returns a new array and forEach does not return an array. If we need the result, but do not wish to mutate the original array,
//  map() is the clear choice. If we simply need to iterate over an array, forEach is a fine choice. */
  const numbers = [1,2,3];
  const doubled = numbers.map(num => num * 2);
  console.log(doubled); // [2,4,6]

// forEach
  numbers.forEach(num => console.log(num * 2)) // No return value - just logs: 2,4,6
  const double = numbers.forEach(num => num * 2);
  console.log(double); // undefined

6.// Filter - The filter() method returns a new array containing elements that satisfy a specified condition. This method skips empty elements and does not change the original array.
const filtered = numbers.filter(num => num > 2)
console.log(filtered) //[3]



7.// Reduce - Executes a reducer function on each element of the array and returns a single output value.
const arrOne = [1,2,3,4]
const sum = arrOne.reduce((acc, cur) => acc + cur, 0)
console.log(sum);


8.// Slice - Returns a shallow copy of a portion of an array into a new array object.
const newArr = arr.slice(0, 2)
console.log(newArr);


9.// Splice() - The splice() method modifies an array (adds, removes or replaces elements).
// Note: The splice() method changes the original array.
arr.splice(0, 2, "orange")
console.log(arr)

10.// indexOf() - The indexOf() method returns the first index of occurance of an array element, or -1 if it is not found.
const languages = ["Java", "JavaScript", "Python", "JavaScript"];

const index = languages.indexOf("JavaScript");
console.log(index); // 1


11.// lastIndexOf() - The lastIndexOf() method returns the last index of occurrence of an array element.
const lastIndex = languages.lastIndexOf("Javascript");
console.log(lastIndex); // 3




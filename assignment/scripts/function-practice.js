console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
console.log(helloName('Ben'))
// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers (firstNumber, secondNumber) {
  return firstNumber + secondNumber
};
console.log(addNumbers(1, 2));

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNum, secondNum, thirdNum) {
 return firstNum * secondNum * thirdNum;
}
console.log(multiplyThree(2,5,7))


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
 return false;
  }
};
console.log(isPositive(-4));
console.log(isPositive(6));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
if (array.length > 0) {
  return array[array.length - 1];
} else {
  return 'undefined';
}
}
console.log(getLast([]));
console.log(getLast([1,2,5,7,89]));

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
for (let i = 0; i < array.length; i++) {
if (array[i] === value) {
  return true;
}
}
return false;
}

console.log(find(4, [3,1,5,7,8,2,3,7,4,123]));
console.log(find(9, [3,1,5,7,8,2,3,7,4,123]));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let convertedString = string.toLowerCase();
  if (convertedString.charAt(0) === letter) {
  return true;
} else {
  return false;
}
}
console.log(isFirstLetter('a', 'A Tree Grows in Brooklyn'));


// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
  // TODO: return the sum
  return sum;
}
console.log(sumAll([1,4,3,6,8,23,2]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let array = [1,6,7,8,3,5,-32,-5,-26,12,3];
let positives = [];
function allPositive(array) {
for (let item of array) {
  if (item > 0) {
    positives.push(item);
  }
}

}
allPositive(array);
console.log('The positives array is: ', positives)

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!
/* From CodeWars : The problem is "Friend or Foe?" 
Explanation: 
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Note: keep the original order of the names in the output.
Starting code provided :
function friend(friends){
  //your code here
}
*/
function friend(friends) {
  isFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4){
      isFriend.push(friends[i]);
    }
  }
  console.log('The Test Array is: ', friends)
  console.log('Your friends are: ', isFriend);
  return isFriend;
}

//Test Array 1:
friend(["Ryan", "Kieran", "Mark"]);

//Test Array 2:
friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]);

//Test Array 3:status
friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"]);

//Test Array 4:
friend(["Love", "Your", "Face", "1"]);

// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}

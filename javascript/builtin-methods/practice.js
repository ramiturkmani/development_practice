/* 
# Practice

**Question 1**
Create a function that takes in a number as a parameter and returns the value of all the numbers from 1 to the number given.

Ex:
Input: 4
Output: 10

Input: 10
Output: 55

Input: 2001
Output: 2003001
*/

let sum = 0;

function sumfunc(n) {
    for (i = 0; i <= n; i++) {
        sum += i;
    }
    console.log(sum);
}

sumfunc(4);

/*
**Question 2**
Write a function that takes in an array of numbers and outputs the average of all the numbers.

Ex:
Input: [ 1 , 4 , 7 ]
Output: 4

Input: [ 10, 5 ]
Output: 7.5

Input: [ 1.5, 3, 2.5, 1 ]
Output: 2
*/

const nums = [10, 5];

//Method 1

function avgArr(nums) {
    return nums.reduce((previousNum, currentNum) => previousNum + currentNum) / nums.length;
}

console.log(avgArr(nums));

//Method 2

const average = (nums) => {
    let result = 0;
    nums.forEach((num) => result += num / nums.length);
    return result;
};

console.log(average(nums));

/*
**Question 3**
Write a function that takes in an integer and returns it's largest binary gap. A binary gap is a positive number of 0's 
surrounded by 1's. This will require you to convert the number to binary---this can be accomplished with num.toString(2)

Ex:
Input: 20, Output: 1
Input: 15, Output: 0
Input: 529, Ouput: 4
*/

const myNum = 15;

function binaryGap(myNum) {
    var count = 0;
    myNum.toString(2).split('').forEach((num) => num == '1', count++);
    console.log("count = " + count);
    // return myNum.toString(2).lastIndexOf('1') - myNum.toString(2).indexOf('1')
}

binaryGap(myNum);
// console.log(binaryGap(myNum));
// console.log(myNum.toString(2));



/*
**Question 4**
Write a function that takes an array of numbers and a function as parameters. The function parameter should return true if the 
input meets a certain condition or false otherwise. Your function should run the function parameter on every element in the array 
parameter and, if it returns true, add the element to a new array. Return the new array.

Ex:
Input: [1,2,3]  function(num){return num === 2}
Output: [2]

Input: [1,2,3,4,5,6]  function(num){return num % 2 === 0}
Output: [2,4,6]

Input: [1,2,3,4,5,6]  function(num){return num > 3}
Output: [4,5,6]
*/





/*
### BONUS

**Question**
Write a function that takes in an array of integers and returns an array with duplicates removed

Ex:
Input: [1,2,2,3]
Output: [1,2,3]

Input: [4,5,4,4,7,5]
Output: [4,5,7]

Input: [1,2,3,5]
Output: [1,2,3,5]
*/





/*
**Question**
Write a function that takes in a number and reverses the order of the digits.

Ex:
Input: 1234
Output:4321

Input: 1201
Output:1021

Input: 4
Output: 4

**Hint:** You can use `toString()` or `parseInt`
*/
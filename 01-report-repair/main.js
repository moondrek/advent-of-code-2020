"use strict";
const fs = require("fs");
const input = fs
    .readFileSync("./input.txt", "utf-8")
    .split("\n")
    .map((ele) => Number(ele));
//Pair Sum
function pairSum(nums) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        const currNum = nums[i];
        if (hash[currNum]) {
            return [currNum, hash[currNum]];
        }
        else {
            const complement = 2020 - currNum;
            hash[complement] = currNum;
        }
    }
    return [];
}
const [firstNum, secondNum] = pairSum(input);
console.log(firstNum * secondNum);
//Three Num Sum
function threeSum(nums) {
    //Prepare an object with
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length - 2; k++) {
                if (nums[i] + nums[k] + nums[j] === 2020) {
                    return [nums[i] * nums[k] * nums[j]];
                }
            }
        }
    }
}
console.log(threeSum(input));

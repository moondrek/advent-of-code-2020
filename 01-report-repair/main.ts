/*
--- Day 1: Report Repair ---
After saving Christmas five years in a row, you've decided to take a vacation at a nice resort on a tropical island. Surely, Christmas will go on without you.

The tropical island has its own currency and is entirely cash-only. The gold coins used there have a little picture of a starfish; the locals just call them stars. None of the currency exchanges seem to have heard of them, but somehow, you'll need to find fifty of these coins by the time you arrive so you can pay the deposit on your room.

To save your vacation, you need to get all fifty stars by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants one star. Good luck!

Before you leave, the Elves in accounting just need you to fix your expense report (your puzzle input); apparently, something isn't quite adding up.

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?

--- Part Two ---
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020?
*/

import fs = require("fs");
const input = fs
  .readFileSync("./input.txt", "utf-8")
  .split("\n")
  .map((ele: string) => Number(ele));

type ComplementDictionary = {
  [key: number]: number;
};

//Pair Sum
function pairSum(nums: number[]) {
  const hash: ComplementDictionary = {};

  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];

    if (hash[currNum]) {
      return [currNum, hash[currNum]];
    } else {
      const complement = 2020 - currNum;
      hash[complement] = currNum;
    }
  }
  return [];
}

const [firstNum, secondNum] = pairSum(input);
console.log(firstNum * secondNum);

//Three Num Sum
//I know this is O(n^3). I'll come back and solve this properly eventually.

function threeSum(nums: number[]) {
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

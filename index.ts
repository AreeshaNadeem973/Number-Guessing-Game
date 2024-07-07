#! /usr/bin/env node

import inquirer from "inquirer";

//1) computer will generate a random number

//2) User input for guessing number

//3)compare user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessNumber",
        type: "number",
        message: "Please guess a number between 1 to 10:",
    },
]);

console.log(answer);

if (answer.userGuessNumber === randomNumber) {
    console.log("congratulation! you gussed right number.");
} else {
    console.log("You gussed wrong number");
};


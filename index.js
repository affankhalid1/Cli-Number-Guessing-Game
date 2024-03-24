#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// 1) Computer will generate a randomnumber -Done
// 2) User input for guessing number -Done
// 3) Compare user input with Computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(chalk.yellow.bold("\t\tWelcome to Our Number Game World"));
const answer = await inquirer.prompt([
    {
        message: chalk.blue.bold("Enter the number between 1-10 : "),
        type: chalk.blueBright.bold("number"),
        name: "userguessednumber",
    },
]);
if (answer.userguessednumber === randomNumber) {
    console.log(chalk.cyanBright.bold("Congratulations! you guessed a correct Number"));
}
else {
    console.log(chalk.red("OOPs! This is not a correct answer"));
}

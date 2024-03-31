#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let todoList = [];
let conditions = true;

console.log(chalk.magenta.bold("\n \t Wellcome to Huzaifa Qureshi - Todo_List Application\n"));

while(conditions){
    let addTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.green("Enter your New Task:")
        }
    ]);
    todoList.push(addTask.task);
    console.log(`${addTask.task} Task added in Todo_List successfully`);

    let addedMoreTask = await inquirer.prompt([
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more task ?",
            default: "Faslse"
        }
    ]);
    conditions = addedMoreTask.addmore
}
console.log("Your updated Todo_List:", todoList);
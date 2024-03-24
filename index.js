import inquirer from "inquirer";
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess the number from 1-5",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratulaion you gussed the right numbe");
}
else {
    console.log("you gussed wrong number");
}

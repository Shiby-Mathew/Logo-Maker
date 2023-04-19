//import class from shape.js
//import questions from questions.js
//import Inquirer
//import fs

const inquirer = require("inquirer");
const fs = require("fs");



//main function
const main = () => {
  //prompt asking for user inputs
  inquirer
    .prompt([
      {
        type: "input",
        name: "character",
        message: "Please enter three characters for your logo",
      },
      {
        type: "list",
        name: "charcolor",
        message: "Select color for the characters in the logo",
        choices: ["White", "Black", "Blue"],
      },
      {
        type: "list",
        name: "shape",
        message: "Please select shape of your logo",
        choice: ["Triangle", "Square", "Circle"],
      },

      {
        type: "list",
        name: "charcolor",
        message: "Select background color for your logo",
        choices: ["White", "Black", "Blue"],
      },
    ])

    //Destructure the object
    .then((data) => {
      console.log(data);
      //   if (answer.length !== 3) {
      //     console.log("Should enter 3 letters");
      //     main();
      //   } else {
      //     createLogo("logo.svg", answers);
      //   }
    });
};
main();

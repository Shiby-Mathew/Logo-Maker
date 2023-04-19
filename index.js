//import class from shape.js
//import questions from questions.js
//import Inquirer
//import fs

const inquirer = require("inquirer");
const fs = require("fs");

//main function
const confirmValidater = async (input) => {
  if (input.length === 3) {
    return true;
  } else {
    return "Incorrect";
  }
};

const main = () => {
  //prompt asking for user inputs
  inquirer
    .prompt([
      {
        type: "input",
        name: "character",
        message: "Please enter three characters for your logo",
        validate: confirmValidater,
      },
      {
        type: "list",
        name: "textColor",
        message: "Select color for the characters in the logo",
        choices: ["White", "Black", "Blue"],
      },
      {
        type: "list",
        name: "shape",
        message: "Please select the shape of your logo",
        choices: ["Triangle", "Square", "Circle"],
      },

      {
        type: "list",
        name: "backgroundColor",
        message: "Select background color for your logo",
        choices: ["White", "Black", "Blue"],
      },
    ])

    //Destructure the object
    .then((data) => {
      console.log(data);
    });
};
main();
//function to make logo using these values

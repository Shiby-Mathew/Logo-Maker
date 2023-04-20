// //import Inquirer
// //import fs

const inquirer = require("inquirer");
//const fs = require("fs");
const { createLogoFunction } = require("./create-logo");

class Questions {
  //main function
  run() {
    //prompt asking for user inputs
    inquirer
      .prompt([
        {
          type: "input",
          name: "character",
          message: "Please enter three characters for your logo",
          validate: async (input) => {
            if (input.length !== 3) {
              return "Incorrect! Please enter 3 letters";
            } else return true;
          },
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

      .then((data) => {
        console.log(data);
        createLogoFunction("logo.svg", data);
      });
  }
}

module.exports = Questions;

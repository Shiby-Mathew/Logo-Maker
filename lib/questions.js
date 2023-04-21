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
          message: "Enter text for logo.(Must contain 3 letters) ",
          validate: async (input) => {
            if (input.length !== 3) {
              return "Incorrect! Please enter 3 letters ";
            } else return true;
          },
        },
        {
          type: "input",
          name: "textColor",
          message: "Enter a text color ",
        },
        {
          type: "list",
          name: "shape",
          message: "Please select the shape of your logo ",
          choices: ["Triangle", "Square", "Circle"],
        },

        {
          type: "inpur",
          name: "backgroundColor",
          message: "Enter a shape color ",
        },
      ])

      .then((data) => {
        console.log(data);
        createLogoFunction("logo.svg", data);
      });
  }
}

module.exports = Questions;

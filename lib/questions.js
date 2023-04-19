// //import Inquirer
// //import fs

// const inquirer = require("inquirer");
// const fs = require("fs");

// class Questions {
//   constructor() {}

//   //function to create logo
// //   createLogo(fileName, answers) {
// //     console.log(fileName);
// //     console.log(answers);
// //   }

//   run() {
//     //prompt asking for user inputs
//     inquirer
//       .prompt([
//         {
//           type: "input",
//           name: "character",
//           message: "Please enter three characters for your logo",
//         },
//         {
//           type: "list",
//           name: "textColor",
//           message: "Select color for the characters in the logo",
//           choices: ["White", "Black", "Blue"],
//         },
//         {
//           type: "list",
//           name: "shape",
//           message: "Please select the shape of your logo",
//           choices: ["Triangle", "Square", "Circle"],
//         },

//         {
//           type: "list",
//           name: "backgroundColor",
//           message: "Select background color for your logo",
//           choices: ["White", "Black", "Blue"],
//         },
//       ])

//       //Destructure the object
//       .then((data) => {
//         console.log(data);
//         if (data.character.length !== 3) {
//           console.log("Please enter 3 characters");
//           this.run();
//         } else {
//           createLogo("logo.svg", data);
//         }
//       });
//   }
// }

// module.exports = Questions;

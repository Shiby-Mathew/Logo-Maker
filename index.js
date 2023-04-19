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
        choices: ["Triangle", "Square", "Circle"],
      },

      {
        type: "list",
        name: "background",
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
// const inquirer = require("inquirer");
// const fs = require("fs");

// //their name, location, bio, LinkedIn URL, and GitHub URL
// const main = () => {
//   inquirer
//     .prompt([
//       {
//         type: "input",
//         message: "What is your user name?",
//         name: "username",
//       },
//       {
//         type: "input",
//         message: "Where is your location",
//         name: "location",
//       },
//       {
//         type: "input",
//         message: "Your Biodata ",
//         name: "bio",
//       },
//       {
//         type: "input",
//         message: " LinkedIn URL",
//         name: "linkedIn",
//       },
//       {
//         type: "input",
//         message: " GitHub URL",
//         name: "gitHub",
//       },
//     ])

//     .then((data) => {
//       // console.log(data);

//       const { username, location, bio, linkedIn, gitHub } = data;
//       const generateHTML = ` <!DOCTYPE html>
//     <html lang="en-US">
//       <head>
//         <meta charset="UTF-8" />
//         <title>Landing Page</title>
//       </head>

//       <body>
//         <div>
//           <header>
//            <h1>My name is ${username}</h1>
//           </header>
//           <section>
//           <p>Location: ${location} </p>
//           <p>Biodata: ${bio}</p>
//           </section>

//           <section>
//           <p>GitHub URL: <a href="${gitHub}">Check my gitHub</a></p>
//           <p>LinkedIn URL:  <a href="${linkedIn}">Check myLinkedIn profile</a></p>
//           </section>

//           <footer>
//             <p> Copyright &copy; 2023 </p>
//           </footer>
//         </div>
//       </body>
//     </html>
//     `;
//       fs.writeFile("index.html", generateHTML, (err) => {
//         err ? console.error(err) : console.log("success");
//       });
//     });
// };
// main();

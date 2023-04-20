//import class from shape.js
//import questions from questions.js
//import Inquirer
//import fs//

//function to make logo using these values
const Questions = require("./lib/questions.js");

//const {createLogo} = require("./lib/createlogo.js");
//exports.createLogo=createLogo;

const questions = new Questions();

questions.run();

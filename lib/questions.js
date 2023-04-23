//import files and dependencies

const inquirer = require("inquirer");

const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shape");
const { writeFile } = require("fs/promises");

class Questions {
  //main function
  run() {
    //prompt asking for user inputs
    return inquirer
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
          message: "Enter a text color (or a hexadecimal number)",
        },
        {
          type: "list",
          name: "shapetype",
          message: "Please select the shape of your logo ",
          choices: ["Triangle", "Square", "Circle"],
        },

        {
          type: "input",
          name: "backgroundColor",
          message: "Enter a shape color (or a hexadecimal number) ",
        },
      ])
      .then(({ character, textColor, shapetype, backgroundColor }) => {
        //creating an object for class depending upon user's input shapetype
        let shape;
        switch (shapetype) {
          case "Circle":
            shape = new Circle();
            break;
          case "Triangle":
            shape = new Triangle();
            break;
          default:
            shape = new Square();
            break;
        }
        //setColor() from shape.js file passing background color of the shape
        shape.setColor(backgroundColor);
        const svg = new SVG();

        //function from svg.js file
        svg.setText(character, textColor);
        svg.setShape(shape);

        //write file logo.svg in the examples folder and function render() from svg.js file which
        //contains the svg format for logo created using user input
        return writeFile("examples/logo.svg", svg.render());
      })
      .then(() => {
        console.log("Generated logo.svg file");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

//export Questions
module.exports = Questions;

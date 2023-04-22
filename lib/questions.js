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
          message: "Enter a text color ",
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
          message: "Enter a shape color ",
        },
      ])
      .then(({ character, textColor, shapetype, backgroundColor }) => {
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
        shape.setColor(backgroundColor);
        const svg = new SVG();
        svg.setText(character, textColor);
        svg.setShape(shape);
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

module.exports = Questions;

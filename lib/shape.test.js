//Import triangel,square,circle from ./shape.js
const { Triangle, Square, Circle } = require("./shape.js");

//echo \"Error: no test specified\" && exit (from package.json)

//Unit test
//describe(test,triangle)
//describe(test,square)
//describe(test,circle)
//need to install jest before testing
describe("Triangle Test", () => {
  it("should pass the test when background color is blue", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      //'<polygon points="150, 5 250, 175 56, 175" fill="${this.color}/>'
      `<polygon points="150, 5 250, 175 56, 175" fill="blue" />`
    );
  });
});

describe("Square Test", () => {
  it("should pass the test when background color is blue", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      //'<polygon points="150, 5 250, 175 56, 175" fill="${this.color}/>'
      `<rect x="55" y="25" width ="190" height="190" fill="blue"/>`
    );
  });
});

describe("Circle Test", () => {
  it("should pass the test when background color is blue", () => {
    const shape = new Circle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      //'<polygon points="150, 5 250, 175 56, 175" fill="${this.color}/>'
      `<circle cx="150" cy="110" r="90" fill="blue" />`
    );
  });
});

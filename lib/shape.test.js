//Import triangel,square,circle from ./shape.js
const { Triangle, Square, Circle } = require("./shape.js");

//echo \"Error: no test specified\" && exit (from package.json)

describe("Triangle Test", () => {
  it("should pass the test when background color is black", () => {
    const shape = new Triangle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      `<polygon points="150, 5 250, 175 56, 175" fill="black" />`
    );
  });
});

describe("Square Test", () => {
  it("should pass the test when background color is black", () => {
    const shape = new Square();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      `<rect x="55" y="25" width ="190" height="190" fill="black"/>`
    );
  });
});

describe("Circle Test", () => {
  it("should pass the test when background color is black", () => {
    const shape = new Circle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="110" r="90" fill="black" />`
    );
  });
});

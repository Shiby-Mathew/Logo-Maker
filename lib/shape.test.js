//Import triangel,square,circle from ./shape.js
const { Triangle, Square, Circle } = require("./shape.js");

// A testing suite for Triangle is created.
describe("Triangle Test", () => {
  // A test is created to check when user input background color is black is equal to test setColor()
  it("should pass the test when background color is black", () => {
    const shape = new Triangle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      `<polygon points="150, 5 250, 175 56, 175" fill="black" />`
    );
  });
});
// A testing suite for Square is created.
describe("Square Test", () => {
  // A test is created to check when user input background color is black is equal to test setColor()
  it("should pass the test when background color is black", () => {
    const shape = new Square();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      `<rect x="55" y="25" width ="190" height="190" fill="black"/>`
    );
  });
});

// A testing suite for Circle is created.
describe("Circle Test", () => {
  // A test is created to check when user input background color is black is equal to test setColor()
  it("should pass the test when background color is black", () => {
    const shape = new Circle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="110" r="90" fill="black" />`
    );
  });
});

//Import triangel,square,circle from ./shape.js
const { Triangle, Square, Circle } = require("./shapes.js");

//Unit test
//describe(test,triangle)
//describe(test,square)
//describe(test,circle)
//need to install jest before testing
describe("TriangleTest", () => {
  it("", () => {
    const shape = new Triangle();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
    );
  });
});

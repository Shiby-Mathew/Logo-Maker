//Create class Shape and extends children class triangle,Square,circle
//module.exports ={Triangle,Square,Circle}

class Shape {
  constructor() {
    this.color = "";
  }
  setColor(color) {
    this.color = color;
  }
}
//Triangle class inherits from Shape
class Triangle extends Shape {
  render() {
    return `<polygon points="150, 5 250, 175 56, 175" fill="${this.color}" />`;
  }
}

//Square class inherits from Shape
class Square extends Shape {
  render() {
    return `<rect x="55" y="25" width ="190" height="190" fill="${this.color}"/>`;
  }
}

//Circle class inherits from Shape
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="110" r="90" fill="${this.color}" />`;
  }
}

module.exports = { Triangle, Square, Circle };

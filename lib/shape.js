//Create class Shape and extends children class triangle,Square,circle
//module.exports ={Triangle,Square,Circle}

class Shape {
  constructor() {}
  setColor(color) {}
}

class Triangle extends Shape {
  render() {
    // '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  }
}

class Square extends Shape {
  render() {}
}

class Circle extends Shape {
  render() {}
}

module.exports = { Triangle, Square, Circle };

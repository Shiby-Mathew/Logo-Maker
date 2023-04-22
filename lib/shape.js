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

class Triangle extends Shape {
  render() {
    return `<polygon points="150, 5 250, 175 56, 175" fill="${this.color}" />`;
    //return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
  }
  //polygon points="150, 5 244, 182 56, 182" fill="black" /
  //<polygon points="150, 5 250, 175 56, 175" fill="yellow" />
}

class Square extends Shape {
  render() {
    return `<rect x="55" y="25" width ="190" height="190" fill="${this.color}"/> `;
    // return `<rect x="90" y="40" width ="120" height="120" fill="${this.color}"/> `;
    // <rect x="55" y="18" width ="200" height="200" fill="red"/>
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="110" r="90" fill="${this.color}" />`;
    //return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    //cx="150" cy="110" r="90" fill="black"
  }
}

module.exports = { Triangle, Square, Circle };

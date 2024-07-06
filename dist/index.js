"use strict";
class Shape {
    constructor(color) {
        this.color = color;
    }
    render() {
        console.log("Rendering");
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log("Rendering a Circle");
    }
}
let shape = new Shape("red");
shape.render();
//# sourceMappingURL=index.js.map
class Circle {
    constructor(radius = 1.0, color = "red") {
        this.radius = radius;
        this.color = color;
    }

    // Getter and setter for radius
    getRadius() {
        return this.radius;
    }

    setRadius(radius) {
        this.radius = radius;
    }

    // Getter and setter for color
    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }

    // Method to calculate area of the circle
    getArea() {
        return Math.PI * this.radius ** 2;
    }

    // Method to calculate circumference of the circle
    getCircumference() {
        return 2 * Math.PI * this.radius;
    }

    // Method to represent Circle object as a string
    toString() {
        return `Circle [radius=${this.radius}, color=${this.color}]`;
    }
}

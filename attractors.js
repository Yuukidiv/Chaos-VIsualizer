// class that creates the attractor and the generator with the chaos equation

let a = 10;
let b = 28;
let c = 8.0 / 3.0;
let x = 0.01;
let y = 0;
let z = 0;
// i need to create an array to get the points
class LorenzAttractor {

    // creating the vector and saving it inside points array
    constructor(x, y, z, dt) {
        this.dt = dt;
        this.initPoint = new p5.Vector(x, y, z);
        this.points = [this.initPoint];
    }
    
    generateLorenz() {
        let dx = a * (y - x) * dt;
        let dy = (x * (b -z) - y) * dt;
        let dz = (x * y - c * z) * dt;
        x += dx;
        y += dy;
        z += dz;
        this.addPoint(x, y, z);
    }

    addPoint(x, y, z) {
        let newPoint = new p5.Vector(x, y, z);
        this.points.push(newPoint);
    }
    // future implementation that can change the render to 2d calling another function passing the same values without the z coordinate
    draw3DPoints() {
        beginShape();
        for (let v of this.points) {
            vertex(v.x, v.y, v.z);
        }
        endShape();
    }

}

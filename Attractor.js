class Attractor {
    constructor(x, y, z, dt, max) {
        this.dt = dt;
        this.x = x;
        this.y = y;
        this.z = z;
        this.max = max;
        this.points = [new p5.Vector(x, y, z)];
    }

    addPoint(x, y, z) {
        this.points.push(new p5.Vector(x, y, z));
        if (this.points.length > this.max) {
            this.points.shift(); // rimuove il primo (più vecchio)
          }
    }

    draw3DPoints() {
        beginShape();
        for (let v of this.points) {
            vertex(v.x, v.y, v.z);
        }
        endShape();
    }

    // sottoclassi generano grafici con variabili diverse
    generate() {
    }
}

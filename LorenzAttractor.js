class LorenzAttractor extends Attractor {
    constructor(x, y, z, dt, max) {
        super(x, y, z, dt, max);
        this.a = 10;
        this.b = 28;
        this.c = 8.0 / 3.0;
    }

    generate() {
        let dx = this.a * (this.y - this.x) * this.dt;
        let dy = (this.x * (this.b - this.z) - this.y) * this.dt;
        let dz = (this.x * this.y - this.c * this.z) * this.dt;

        this.x += dx;
        this.y += dy;
        this.z += dz;

        this.addPoint(this.x, this.y, this.z);
    }
}

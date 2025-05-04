class RosslerAttractor extends Attractor {
    constructor(x, y, z, dt, max) {
        super(x, y, z, dt, max);
        this.a = 0.2;
        this.b = 0.2;
        this.c = 5.7;
    }

    generate() {
        let dx = (-this.y - this.z) * this.dt;
        let dy = (this.x + this.a * this.y) * this.dt;
        let dz = (this.b + this.z * (this.x - this.c)) * this.dt;

        this.x += dx;
        this.y += dy;
        this.z += dz;

        this.addPoint(this.x, this.y, this.z);
    }
}

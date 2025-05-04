class DadrasAttractor extends Attractor {
    constructor(x, y, z, dt, max) {
        super(x, y, z, dt, max);
        this.a = 3;
        this.b = 2.7;
        this.c = 1.7;
        this.d = 2;
        this.e = 9;
    }

    generate() {
        let lx = 1.1
        let ly = 2.1
        let lz = -2.00
        let dx = this.y - (this.a * lx) + (this.b * ly * lz);
        let dy = (this.c * ly) - (lx * lz) + lz;
        let dz = (this.d * lx * ly) - (this.e * lz);
    
        dx *= this.dt;
        dy *= this.dt;
        dz *= this.dt;
    
        lx += dx;
        ly += dy;
        lz += dz;
    
        this.addPoint(lx, ly, lz);
    }
}

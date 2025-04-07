var w = window.innerWidth;
var h = window.innerHeight;  

// number of attractors so, number of points
let nAttrac = 4;
let attractors =[];
let randomRangeX = [-15, 15];
let randomRangeY = [-18, 18];
let randomRangeZ = [14, 40];
let dt = 0.01;
let pertubation = 1 / 1000;

function setup() {
    canvas=createCanvas(w, h, WEBGL);
    camera(0, 0, 200, 0, 0, 0, 0, 1, 0);
   startGenerate();

}

function startGenerate() {

    // choose random point as the starting point
    let randX = random(randomRangeX[0], randomRangeX[1]);
    let randY = random(randomRangeY[0], randomRangeY[1]);
    let randZ = random(randomRangeZ[0], randomRangeZ[1]);

    // cretae the attractors as the number decided
    for (let index = 0; index < nAttrac; index++) {
        // pertubation to change the starting points of each attractor
        let newX = randX + index * pertubation;
        let newY = randY + index * pertubation;
        let newZ = randZ + index * pertubation;
        // now we populate the array to store the attactors with the vectors
        attractors[index] = new LorenzAttractor(newX, newY, newZ, dt);
    }
    
}

function drawAttractors() {
    push();
    strokeWeight(0.2);
    noFill();
    for(let i = 0; i < attractors.length; i++) {
        stroke(i, 255, 255);
        attractors[i].generateLorenz();
        attractors[i].draw3DPoints();
    }
    pop();
}

function draw() {
    background(0,0,0);
    orbitControl();
    drawAttractors();

}

function windowResized() {
    resizeCanvas(w,h)
}
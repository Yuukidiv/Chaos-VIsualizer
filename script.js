var w = window.innerWidth;
var h = window.innerHeight;  

// number of attractors so, number of points
let nAttrac = 20;
let maxDisplay = 100;
let attractors =[];
let randomRangeX = [-15, 15];
let randomRangeY = [-18, 18];
let randomRangeZ = [14, 40];
let dt = 0.01;
let pertubation = 1 / 1000;


function setup() {
    canvas=createCanvas(w, h, WEBGL);
    camera(0, 0, 200, 0, 0, 0, 0, 1, 0);
    startGenerate("lorentz");
}

// function to start generating for the button
function startSystem() {
    let selected = document.getElementById("systemSelector").value;
    attractors = [];

    startGenerate(selected);
}

function startGenerate(type) {

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
        if (type === "lorentz") {
            nAttrac = 20
            attractors[index] = new LorenzAttractor(newX, newY, newZ, dt, maxDisplay);
        }
        else if (type === "rossler") {
            nAttrac=1;
            attractors[index] = new RosslerAttractor(10, 0, 10, 0.02, 10000);
        }
        else if (type === "dadras") {
            attractors[index] = new DadrasAttractor(1.1, 2.1, -2, 0.6, 100000);
        }
    }
    
}

function drawAttractors() {
    push();
    strokeWeight(0.2);
    noFill();
    for(let i = 0; i < attractors.length; i++) {
        stroke(i, 255, 255);
        attractors[i].generate();
        attractors[i].draw3DPoints();
    }
    pop();
}

function draw() {
    background(0,0,0);
    orbitControl();
    drawAttractors();

}

function restartSketch() {
    attractors = []; // svuota gli attrattori
    let selected = document.getElementById("systemSelector").value;
    if (selected === "lorentz") {
        startGenerate(selected); // ricrea i nuovi attrattori
    }
    else if (selected === "rossler") {
        startGenerate(selected);
    }
    else if (selected === "dadras") {
        startGenerate(selected);
    }
}
// saving the image
function saveImage() {
    saveCanvas('LorentzScreenShot', 'png');
}
function windowResized() {
    resizeCanvas(w,h)
}
import p5 from "p5/lib/p5.min";


let isPrime = (value) => {
    for (let i = 2; i < value / 2; i++) {
        if (value % i === 0) {
            return false;
        }
    }
    return value > 1;   
}   

let sketch = (p5) => {    

    let x,y;
    let px,py;
    let step = 1;
    let stepSize = 5;
    let numSteps= 1;
    let state = 0;
    let turnCounter = 0;
    let totalSteps;
    let width = window.innerWidth;
    let height = window.innerHeight;

    p5.setup = () => {
        p5.createCanvas(width,height);
        x = width / 2;
        y = height / 2;
        px = x;
        py = y;
        p5.background(255);

        const cols = width / stepSize;
        const rows = height / stepSize;
        totalSteps = cols * rows;

    }

    p5.draw = () => {
        let pink = p5.color("#dc3787");
        p5.fill(pink);
        p5.stroke(pink);
        p5.strokeWeight(0.5);
        if(isPrime(step)) {
            p5.circle(x, y, stepSize*0.5);  
        }
        p5.line(x,y,px,py);
        px = x;
        py = y;

        switch (state) {
            case 0:
                x += stepSize;  
                break;
            case 1: 
                y -= stepSize;  
                break;  
            case 2: 
                x -= stepSize;
                break;
            case 3:
                y += stepSize;
                break;
            default:
                break;
        }


        if(step % numSteps == 0) {
            state = (state + 1) % 4;    
            turnCounter++; 
            if(turnCounter % 2 == 0) {
                numSteps++;
            }
        }
        step++;
        if(step > totalSteps) {
            p5.noLoop();
            console.log("Done");    
        }
    }
}

new p5(sketch);;
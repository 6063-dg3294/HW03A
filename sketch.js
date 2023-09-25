let maxDiam = 200
let minDiam = 20



function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("yellow");
  fill(0)
  for (let xpos = 0; xpos <= width; xpos += maxDiam){
    for (let ypos = 0; ypos <= height; ypos += maxDiam){
      ellipse(xpos, ypos, 30, 30)
    }
  }







}

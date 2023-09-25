let maxDiam = 100
let minDiam = 20




function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background("yellow");
  fill(0)

  // bigger circles
  for (let xpos = 0; xpos <= width; xpos += maxDiam){
    for (let ypos = 0; ypos <= height; ypos += maxDiam){
      ellipse(xpos, ypos, 30, 30)
    }
  }

// smaller circles
  for (let xpos = 50; xpos <= width; xpos += maxDiam){
    for (let ypos = 50; ypos <= height; ypos += maxDiam){
      ellipse(xpos, ypos, 10, 10)
    }
  }






}

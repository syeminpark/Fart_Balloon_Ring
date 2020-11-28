let Ass;
let Fart;
let FartBubble = [];
let Title;
let Ring;
let Screen;
let Fingers;
let bubbleNum
let d
let value;

let buoyancy;
let current;

let rightBubble
let leftBubble
let rad1
let rad2


function setup() {
  createCanvas(800, 600);

  rad1 = width * 0.55 / 2
  rad2 = height / 2.5 / 2


  Fingers = new fingers();
  Ass = new ass();
  Fart = new fart();
  Title = new title();
  Ring = new ring();
  Screen = new screen(rad1, rad2);

  bubbleNum = random(1, 5)

}

function draw() {
  background(255, 100, 90);
  strokeWeight(10);

  Fart.show()
  Fart.mask()
  Ass.show()
  Title.show()
  Screen.show()
  Fingers.show()
  Ring.show()
  Screen.outline()

  for (let i = 0; i < FartBubble.length; i++) {
    buoyancy = createVector(0, -0.05);
    current = createVector(random(-0.1, 0.1), 0)

    FartBubble[i].show()
    FartBubble[i].move(buoyancy)
    FartBubble[i].move(current)
    FartBubble[i].edge(rad1, rad2)
    let overlapping=false
    for (let j=0;j<FartBubble.length;j++){
      if(FartBubble[i]!==FartBubble[j] && FartBubble[i].intersects(FartBubble[j])){
        overlapping=true
        // resolveCollision(FartBubble[i],FartBubble[j])
      }
    }
  if(overlapping){
    FartBubble[i].show(0)

  }
  else{
FartBubble[i].show(255)
  }

}
  Screen.outline()
}


// function rotate1(velocity,angle){
//     let rotatedVelocities= {
//       x: velocty.x*Math.cos(angle)-velocity * Math.sin(angle),
//        y:velocity.x*Math.sin(angle)+ velocity * Math.cos(angle)
//     }
// }
//
// function resolveCollision(particle, otherParticle) {
//     const xVelocityDiff = particle.vel.x - otherParticle.vel.x;
//     const yVelocityDiff = particle.vel.y - otherParticle.vel.y;
//
//     const xDist = otherParticle.pos.x - particle.pos.x;
//     const yDist = otherParticle.pos.y - particle.pos.y;
//
//     // Prevent accidental overlap of particles
//     if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
//
//         // Grab angle between the two colliding particles
//         const angle = -Math.atan2(otherParticle.pos.y - particle.pos.y, otherParticle.pos.x - particle.pos.x);
//
//         // Store mass in var for better readability in collision equation
//         const m1 = particle.mass;
//         const m2 = otherParticle.mass;
//
//         // Velocity before equation
//         const u1 = rotate(particle.vel, angle);
//         const u2 = rotate(otherParticle.vel, angle);
//
//         // Velocity after 1d collision equation
//         const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
//         const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
//
//         // Final velocity after rotating axis back to original location
//         const vFinal1 = rotate(v1, -angle);
//         const vFinal2 = rotate(v2, -angle);
//
//         // Swap particle velocities for realistic bounce effect
//         particle.vel.x = vFinal1.x;
//         particle.vel.y = vFinal1.y;
//
//         otherParticle.vel.x = vFinal2.x;
//         otherParticle.vel.y = vFinal2.y;
//     }
// }
function mousePressed() {
  bubbleNum = random(0,4)


  //left mask
 if(dist(mouseX,mouseY,width/5,height*0.87)<50 ||dist(mouseX,mouseY,width/4.5,height*0.78)<30 || dist(mouseX,mouseY,width/6.4,height*0.818)<32
    || dist(mouseX,mouseY,width/8,height*0.91)<30|| dist(mouseX,mouseY,width/5.05,height*0.93)<30|| dist(mouseX,mouseY,width/3.8,height*0.89)<30
    || dist(mouseX,mouseY,width/3.8,height*0.82)<22.5|| dist(mouseX,mouseY,width/3.4,height*0.79)<22.5 || dist(mouseX,mouseY,width/3,height*0.79)<20){
  for(let i=0;i<bubbleNum;i++){
     rightBubble = createVector(random(width / 2.4, width / 3.3), random(height / 1.9, height / 2),random(20,30))
     // if(i !== 0){
     //   for(let j=0;j<FartBubble.length;j++){
     //      if(dist(rightBubble.x,rightBubble.y,FartBubble[j].pos.x,FartBubble[j].pos.y)<rightBubble.z+FartBubble[j].pos.z){
     //         rightBubble = createVector(random(width / 2.4, width / 3.3), random(height / 1.9, height / 2),random(20,30))
     //         j=-1
     //      }
     //   }
     // }
    let p= new fartBubble(rightBubble);
    FartBubble.push(p)

    value=255
  }
}
else if(dist(mouseX,mouseY,width/5*4,height*0.87)<50 ||dist(mouseX,mouseY,width/4.5*3.5,height*0.78)<30 || dist(mouseX,mouseY,width/6.4*5.4,height*0.818)<32
   || dist(mouseX,mouseY,width/8*7,height*0.91)<30|| dist(mouseX,mouseY,width/5.05*4.05,height*0.93)<30|| dist(mouseX,mouseY,width/3.8*2.8,height*0.89)<30
   || dist(mouseX,mouseY,width/3.8*2.8,height*0.82)<22.5|| dist(mouseX,mouseY,width/3.4*2.4,height*0.79)<22.5 || dist(mouseX,mouseY,width/3*2,height*0.79)<20){
     for(let i=0;i<bubbleNum;i++){
       leftBubble = createVector(random(width * 0.6, width * 0.7), random(height / 1.9, height / 2),random(20,30))
     let p= new fartBubble(leftBubble);
     FartBubble.push(p)

    value=1;
   }
 }
}


class fartBubble {
  constructor(x) {
    this.pos = x
    this.vel = createVector(0, 0)
    this.acc = createVector(0, 0)
    this.radians = 0
    this.x1 = 0
    this.y1 = 0
    this.max=0
    this.min=0
    this.color=0
    this.mass=1

  }

  show(d) {
    this.color=d

    fill(this.color,this.color,this.color)

    stroke(210)
    strokeWeight(5)

    ellipse(this.pos.x, this.pos.y, this.pos.z)
  }

  move(force) {
    this.pos.add(this.vel)

    this.vel.add(this.acc)
    this.acc.set(0, 0)
    this.acc.add(force)
  }

  intersects(other){
    let d=dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y)


  return (d<(this.pos.z+other.pos.z)/2);

  }
  edge(x, y) {
    this.radius1 = x
    this.radius2 = y

      for (this.radians = 180; this.radians < 270; this.radians++) {

        this.x1 = cos(radians(this.radians)) * this.radius1
        this.y1 = sin(radians(this.radians)) * this.radius2

        if (this.pos.x < this.x1 + width / 2 &&  this.pos.y < this.y1 + height / 2.5+13 &&this.pos.y>height/5) {
          this.max = cos(radians(270)) * this.radius1+width/2
          this.vel.y=0
          this.vel.y=this.pos.x/this.max*this.pos.x/this.max-0.8
           this.vel.x=0
         this.pos.x++

        }
      }

      for (this.radians = 275; this.radians < 360; this.radians++) {

        this.x1 = cos(radians(this.radians)) * this.radius1
        this.y1 = sin(radians(this.radians)) * this.radius2
        //ellipse(this.x1+width / 2,this.y1+height / 2.5,10,10)

        if (this.x1 + width / 2 < this.pos.x && this.pos.y < this.y1 + height / 2.5+13&&this.pos.y>height/5) {
          this.min = cos(radians(275)) * this.radius1+width/2
          this.vel.y=0
          this.vel.y=this.min/this.pos.x*this.min/this.pos.x*this.min/this.pos.x-0.8
          this.vel.x=0
          this.pos.x--

        }
      }
  }
}

class title {
  constructor() {

  }
  show() {
    stroke(0)
    fill(255, 200, 100)

    textSize(100)
    text('뿡', width * 0.01, height * 0.2)
    text('뿡', width * 0.86, height * 0.2)
    text('엿', width * 0.86, height * 0.45)
    text('엿', width * 0.01, height * 0.45)
    text('링', width * 0.01, height * 0.7)
    text('링', width * 0.86, height * 0.7)
  }
}

class ring {
  constructor() {

  }
  show() {


    fill(255, 255, 120)
    rect(400, 200, 50, 15, 100)

  }
}

class fart {
  constructor() {
this.check1=255
this.check2=1

  }
  show(){
this.value=value

if (this.check1==this.value){
    stroke(255)
    value=0

  }
  else{
    noStroke()
  }

    fill(220);

    strokeWeight(5)

    beginShape()
    vertex(width / 3, height * 0.7)
    vertex(width * 0.25, height * 0.8)

    bezierVertex(width / 3.7, height * 0.7, width / 6, height * 0.7, width * 0.2, height * 0.82)
    bezierVertex(width / 6, height * 0.7, width / 13, height * 0.8, width / 7, height * 0.86)
    bezierVertex(width / 25, height * 0.88, width / 11, height, width / 6, height * 0.93)
    bezierVertex(width * 0.16, height * 1.01, width / 3.9, height, width / 4.5, height * 0.9)
    bezierVertex(width * 0.27, height, width / 3, height * 0.9, width / 3.7, height * 0.84)

    vertex(width * 0.4, height * 0.79)
    endShape()

    if (this.check2==this.value){
        stroke(255)
        value=0
      }
      else{
  noStroke()
      }


    beginShape()
    vertex(width / 3 * 2, height * 0.7)
    vertex(width / 4 * 3, height * 0.8)

    bezierVertex(width * 0.73, height * 0.7, width / 6 * 5, height * 0.7, width / 5 * 4, height * 0.82)
    bezierVertex(width / 6 * 5, height * 0.7, width / 13 * 12, height * 0.8, width / 7 * 6, height * 0.86)
    bezierVertex(width / 25 * 24, height * 0.88, width / 11 * 10, height, width / 6 * 5, height * 0.93)
    bezierVertex(width / 100 * 84, height * 1.01, width / 3.9 * 2.9, height, width / 4.5 * 3.5, height * 0.9)
    bezierVertex(width * 0.73, height, width / 3 * 2, height * 0.9, width / 3.7 * 2.7, height * 0.84)

    vertex(width * 0.6, height * 0.79)
    endShape()


  }
  mask(){
    stroke(220)
    strokeWeight(0.5)
    noFill()

   //left mask

    ellipse(width/5,height*0.87,100)

    ellipse(width/4.5,height*0.78,60)

    ellipse(width/6.4,height*0.818,64)
    ellipse(width/8,height*0.91,60)
    ellipse(width/5.05,height*0.93,60)
    ellipse(width/3.8,height*0.89,60)



    ellipse(width/3.8,height*0.82,45)

   ellipse(width/3.4,height*0.79,45)
    ellipse(width/3,height*0.79,40)


   //rigt mask

    ellipse(width/5*4,height*0.87,100)

    ellipse(width/4.5*3.5,height*0.78,60)

    ellipse(width/6.4*5.4,height*0.818,64)
    ellipse(width/8*7,height*0.91,60)
    ellipse(width/5.05*4.05,height*0.93,60)
    ellipse(width/3.8*2.8,height*0.89,60)



    ellipse(width/3.8*2.8,height*0.82,45)

   ellipse(width/3.4*2.4,height*0.79,45)
    ellipse(width/3*2,height*0.79,40)
  }
}

class fingers {
  constructor() {

  }
  show() {
    rectMode(CENTER)
    fill(255, 200, 200)
    stroke(255, 100, 70)

    //left pinky
    rect(width / 2.25, height / 1.81, 30, 50, 100)
    //left ring
    rect(width / 2.13, height / 1.82, 30, 60, 100)
    //right thumb
    rect(width / 1.8, height / 1.81, 30, 50, 100)
    //right index
    rect(width / 1.88, height / 1.82, 30, 60, 100)
    //middle finger
    rect(width / 2, height / 2.1, 30, 150, 100)
    rect(width / 2, height / 2.7, 20, 40, 100)

  }
}

class ass {
  constructor() {
    this.L_C1 = createVector(width / 4, height * 1.1);
    this.L_C2 = createVector(width / 100, height / 7)
    this.L_A = createVector(width / 2, height / 9)
    this.R_C1 = createVector(width / 100 * 99, height / 7)
    this.R_C2 = createVector(width * 3 / 4, height * 1.1)
    this.R_A = createVector(width / 2, height / 5 * 3.5)


  }
  show() {

    fill(255, 200, 200)
    beginShape();
    strokeWeight(2);
    stroke(255, 100, 70)

    vertex(width / 2, height * 0.7)
    bezierVertex(this.L_C1.x, this.L_C1.y, this.L_C2.x, this.L_C2.y, this.L_A.x, this.L_A.y);
    bezierVertex(this.R_C1.x, this.R_C1.y, this.R_C2.x, this.R_C2.y, this.R_A.x, this.R_A.y);

    endShape();
    strokeWeight(5);

    //low buttcrack

    beginShape();
    vertex(width / 2, height * 0.7);
    quadraticVertex(width * 0.59, height * 0.55, width * 0.54, height * 0.4);
    endShape()

    //top buttcrack
    line(width * 0.52, height * 0.2, width * 0.5, height * 0.16)
    line(width * 0.52, height * 0.2, width * 0.54, height * 0.16)

    //pimple
    fill(255, 0, 0)
    ellipse(width / 3, height * 0.6, 10, 10)
  }
}
class screen {
  constructor(x, y) {

    this.radius1 = x
    this.radius2 = y

  }
  show() {

    fill(250, 150, 150)
    noStroke()
    ellipse(width / 2, height / 2.5, this.radius1 * 2, this.radius2 * 2)
  }
  outline() {
    noFill()

    strokeWeight(10)
    stroke(255, 100, 70)
    ellipse(width / 2, height / 2.5, this.radius1 * 2, this.radius2 * 2)
  }
}


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
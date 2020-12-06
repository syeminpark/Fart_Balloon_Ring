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
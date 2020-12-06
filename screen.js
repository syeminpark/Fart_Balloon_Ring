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
  
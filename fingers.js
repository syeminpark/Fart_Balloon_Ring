class fingers {
    constructor() {
      this.pinky=[width / 2.25, height / 1.95, 30, 50, 100]
      this.ring=[width / 2.13, height / 2, 30, 60, 100]
      this.thumb=[width / 1.8, height / 1.95, 30, 50, 100]
      this.index=[width / 1.88, height / 2, 30, 60, 100]
      this.middle=[width / 2, height / 2.85, 30, 150, 100]
      this.nail=[width / 1.975, height / 3, 20, 40, 100]

  
    }
  
    show() {
      rectMode()
      fill(255, 200, 200)
      stroke(255, 100, 70)
  
      //left pinky
      rect(this.pinky[0],this.pinky[1], this.pinky[2], this.pinky[3], this.pinky[4])
      //left ring
      rect(this.ring[0], this.ring[1], this.ring[2], this.ring[3], this.ring[4])
      //right thumb
      rect(this.thumb[0], this.thumb[1], this.thumb[2], this.thumb[3], this.thumb[4])
      //right index
      rect(this.index[0], this.index[1], this.index[2], this.index[3], this.index[4])

      //middle finger

      rect(this.middle[0],this.middle[1],this.middle[2],this.middle[3],this.middle[4])

      rect(this.nail[0],this.nail[1],this.nail[2],this.nail[3],this.nail[4])
    }
  }
  
  
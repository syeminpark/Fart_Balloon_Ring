class ring {
    constructor(x) {
         this.pos=x
        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.mass=0
        this.radians=0
        this.x1=0
        this.y1=0
        this.max=0
        this.min=0
        this.mass=0
    }
    show() {
  
      fill(255, 255, 120)
      rect(this.pos.x, this.pos.y, 50, 15, 100)
    }
    edge(x,y){

            this.radius1 = x
            this.radius2 = y
            
            //왼쪽 부분
        
              for (this.radians = 90; this.radians < 180; this.radians++) {
        
                this.x1 = cos(radians(this.radians)) * this.radius1
                this.y1 = sin(radians(this.radians)) * this.radius2
        
                if (this.pos.x < this.x1 + width / 2 &&  this.pos.y >this.y1 + height / 2.5-13) {
                  this.max = cos(radians(270)) * this.radius1+width/2
                  this.vel.y=0
                this.vel.y=this.pos.x/this.max/this.pos.x/this.max-1
                 this.vel.x=0
        
                 this.pos.x++
                 
                }
              }
              for (this.radians = 0; this.radians < 90; this.radians++) {
        
                this.x1 = cos(radians(this.radians)) * this.radius1
                this.y1 = sin(radians(this.radians)) * this.radius2
            
        
                if (this.x1 + width / 2 < this.pos.x && this.pos.y > this.y1 + height / 2.5-13) {
                  this.min = cos(radians(275)) * this.radius1+width/2
                  this.vel.y=0
                  this.vel.y=this.min/this.pos.x/this.min/this.pos.x*this.min/this.pos.x-0.8
                  this.vel.x=0
                  this.pos.x--
                }
            }
     for (this.radians = 180; this.radians < 271; this.radians++) {
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
        
    for (this.radians = 270; this.radians < 360; this.radians++) {
  
          this.x1 = cos(radians(this.radians)) * this.radius1
          this.y1 = sin(radians(this.radians)) * this.radius2
  
          if (this.x1 + width / 2 < this.pos.x && this.pos.y < this.y1 + height / 2.5+13&&this.pos.y>height/5) {
            this.min = cos(radians(270)) * this.radius1+width/2
            this.vel.y=0
            this.vel.y=this.min/this.pos.x*this.min/this.pos.x*this.min/this.pos.x-0.8
            this.vel.x=0
            this.pos.x--
          }
        }
    
    
}
    move(force){
        this.pos.add(this.vel)
        this.vel.add(this.acc)
        this.acc.set(0, 0)
        this.acc.add(force)
  
    }
    collide(){
    }
  
  }

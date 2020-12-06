class fartBubble {
    constructor(x,idin,oin) {
      this.pos = x
      this.vel = createVector(0, 0)
      this.acc = createVector(0, 0)
      this.id = idin;
      this.others = oin;
      this.vx = 0;
      this.vy = 0;
  
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
      stroke(210,240,20)
      strokeWeight(8)
  
      ellipse(this.pos.x, this.pos.y, this.pos.z)
    }
  
    pop() {
      if(this.pos.y<70){
        this.pos.z++
      }
        if (this.pos.y<random(20,50)) {
  
          return true;
        } else {
          return false;
        }
      }
  
    collide(){
      for (let i = this.id + 1; i < FartBubble.length; i++) {
  
        let dx = this.others[i].pos.x - this.pos.x;
        let dy = this.others[i].pos.y - this.pos.y;
  
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].pos.z / 2 + this.pos.z / 2;
        if (distance < minDist) {
  
           let angle = atan2(dy, dx);
           let targetX = this.pos.x + cos(angle) * minDist;
           let targetY = this.pos.y + sin(angle) * minDist;
  
           let ax = (targetX - this.others[i].pos.x) * spring;
          let ay = (targetY - this.others[i].pos.y) * spring;
  
          this.vx += ax;
          this.vy += ay;
  
          this.others[i].vx -= ax;
          this.others[i].vy -= ay;
        }
      }
    }
  
    move(force) {
  
      this.pos.x+=this.vx
      this.pos.y+=this.vy
      this.pos.add(this.vel)
  
      this.vel.add(this.acc)
      this.acc.set(0, 0)
      this.acc.add(force)
  
      if (this.pos.x + (this.pos.z / 2) > width*0.75) {
  
           this.vx *= friction;
           this.vy*=-friction;
         }
          else if (this.pos.x - this.pos.z/ 2 < width*0.25) {
  
           this.vx *= friction;
           this.vy*=-friction;
         }
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
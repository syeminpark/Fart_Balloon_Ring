class ring {
    constructor(x,idin,oin) {
         this.pos=x
         this.w=50
         this.h=15

         this.id=idin
         this.others=oin
         this.vx=0
         this.vy=0

        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.mass=0
        this.radians=0
        this.x1=0
        this.y1=0
        this.max=0
        this.min=0

        this.complete=false
        this.bounce=false
       


        this.vx=0
        this.vy=0
    }
    show() {

      fill(255, 255, 120)
      rect(this.pos.x, this.pos.y, this.w, this.h, 100)
    }
    edge(x,y){

            this.radius1 = x
            this.radius2 = y
            
            //왼쪽 부분
        
              for (this.radians = 89; this.radians < 180; this.radians++) {
        
                this.x1 = cos(radians(this.radians)) * this.radius1
                this.y1 = sin(radians(this.radians)) * this.radius2
        
                if (this.pos.x < this.x1 + width / 2 &&  this.pos.y >this.y1 + height / 2.5-13) {
                  this.max = cos(radians(270)) * this.radius1+width/2
                  this.vel.y=0
                this.vel.y=this.pos.x/this.max/this.pos.x/this.max+0.4
                 this.vel.x=0
        
                 this.pos.x++
                 
                }
              }
              //오른쪽 부분
              for (this.radians = 0; this.radians < 91; this.radians++) {
        
                this.x1 = cos(radians(this.radians)) * this.radius1
                this.y1 = sin(radians(this.radians)) * this.radius2
            
        
                if (this.x1 + width / 2 < this.pos.x && this.pos.y > this.y1 + height / 2.5-35) {
                  this.min = cos(radians(275)) * this.radius1+width/2
                  this.vel.y=0
                  this.vel.y=this.min/this.pos.x/this.min/this.pos.x*this.min/this.pos.x+0.4
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
            this.vel.y=this.pos.x/this.max*this.pos.x/this.max
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
       
       this.force=force

       if(this.collideScreen()){
        this.vel=createVector(0,0)

    }

       else if(this.collideSelf()){

        this.vel.y-=0.01
        this.acc=createVector(0,-0.001)

        this.force*=-1

        }
   
        
      
        this.pos.add(this.vel)
        this.vel.add(this.acc)
        this.acc.set(0, 0)
        this.acc.add(this.force)
       
  
    }

    collideSelf(){
      for (let i = this.id + 1; i < Ring.length; i++) {
  
        let dx = this.others[i].pos.x - this.pos.x;
        let dy = this.others[i].pos.y - this.pos.y;
  
        let distance = sqrt(dx * dx + dy * dy);
        let minDist = this.others[i].h/ 2 + this.h / 2;
        
        if (distance < minDist) {
  
           let angle = atan2(dy, dx);
           let targetX = this.pos.x + cos(angle) * minDist;
           let targetY = this.pos.y + sin(angle) * minDist;
  
           let ax = (targetX - this.others[i].pos.x) * -0.03;
          let ay = (targetY - this.others[i].pos.y) * -0.2;
  
          this.vx -= ax;
          this.vy -= ay;
  
          this.others[i].vx += ax;
          this.others[i].vy += ay;

          this.bounce=true
          return this.bounce
        }
      }

    }

    collideScreen(){


        this.ring_L_edge=this.pos.x
        this.ring_R_edge=this.pos.x+this.w
        this.ring_T_edge=this.pos.y
        this.ring_B_edge=this.pos.y+this.h
        
        this.pinky_L_edge=Fingers.pinky[0]
        this.pinky_T_edge=Fingers.pinky[1]
        

        this.ringFin_L_edge=Fingers.ring[0]
        this.ringFin_T_edge=Fingers.ring[1]

        this.index_R_edge=Fingers.index[0]+Fingers.index[2]
        this.index_T_edge=Fingers.index[1]

        this.thumb_R_edge=Fingers.thumb[0]+Fingers.thumb[2]
        this.thumb_T_edge=Fingers.thumb[1]


        this.middle_L_edge=Fingers.middle[0]
        this.middle_T_edge=Fingers.middle[1]
        this.middle_R_edge=Fingers.middle[0]+Fingers.middle[2]

        this.nail_L_edge=Fingers.nail[0]
        this.nail_T_edge=Fingers.nail[1]
        this.nail_R_edge=Fingers.nail[0]+Fingers.nail[2]

        

        if ((this.ring_R_edge>this.middle_L_edge && this.ring_B_edge>this.middle_T_edge) && this.ring_L_edge<this.middle_R_edge ){
            if(this.ring_L_edge+3>=this.middle_L_edge|| this.ring_R_edge-3<= this.middle_R_edge){
        
              if (this.pos.x<width/2){
              this.pos.x--
              }
              else{
                this.pos.x++
              }
            }
            else{
                this.complete=true
            }
        }

        if(this.ring_R_edge>this.nail_L_edge && this.ring_B_edge>this.nail_T_edge&&this.ring_L_edge<this.nail_R_edge){
             if(this.ring_L_edge>=this.nail_L_edge || this.ring_R_edge<=this.nail_R_edge ){
              
              if (this.pos.x<width/2){
              this.pos.x--
              }
              else{
                this.pos.x++
              }
             }
        }

        if (this.ring_R_edge>this.pinky_L_edge && this.ring_B_edge>this.pinky_T_edge){
            if (this.ring_L_edge<this.thumb_R_edge){
              
              this.vel.y*=-0.9
              if (this.pos.x<width/2){
              this.pos.x--
              }
              else{
                this.pos.x++
              }
            }
        }
        if(this.ring_R_edge>this.ringFin_L_edge && this.ring_B_edge>this.ringFin_T_edge){
            if(this.ring_L_edge<this.index_R_edge){
                if(this.complete==false){
                  
                  if (this.pos.x<width/2){
                     this.pos.x--
                     }
                  else{
                    this.pos.x++
                    }
                    }
              else{
                 return (this.complete)
               }
                
            }
        }

    }    
  
  }

class ring {
    constructor(x) {
         this.pos=x
         this.w=50
         this.h=15

        this.vel = createVector(0, 0)
        this.acc = createVector(0, 0)
        this.mass=0
        this.radians=0
        this.x1=0
        this.y1=0
        this.max=0
        this.min=0

        this.complete=false
       

        this.others=0
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
                this.vel.y=this.pos.x/this.max/this.pos.x/this.max-1+1.4
                 this.vel.x=0
        
                 this.pos.x++
                 
                }
              }
              for (this.radians = 0; this.radians < 91; this.radians++) {
        
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

        if(this.collide()){
            this.vel=createVector(0,0)

        }
        else{
        
        }
           
    
        
        

        this.pos.add(this.vel)
        this.vel.add(this.acc)
        this.acc.set(0, 0)
        this.acc.add(this.force)
       
  
    }
    collide(){


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
            if(this.ring_L_edge+1>=this.middle_L_edge|| this.ring_R_edge-1<= this.middle_R_edge){
                this.pos.y=height*0.05
            }
            else{
                this.complete=true-   
            }
        }

        if((this.ring_R_edge>this.nail_L_edge && this.ring_B_edge>this.nail_T_edge)&&this.ring_L_edge<this.nail_r_edge){
            if(this.ring_L_edge>this.nail_L_edge ||this.ring_R_edge<this.nail_R_edge   ){
                this.pos.y=height*0.05
                     }
        }

        if (this.ring_R_edge>this.pinky_L_edge && this.ring_B_edge>this.pinky_T_edge){
            if (this.ring_L_edge<this.thumb_R_edge){
                
            }
        }
        if(this.ring_R_edge>this.ringFin_L_edge && this.ring_B_edge>this.ringFin_T_edge){
            if(this.ring_L_edge<this.index_R_edge){
                if(this.complete==false){
                    this.pos.y=height*0.2
                    }
                else{
                    return (this.complete)
                    }
                
            }
        }

    }    
  
  }

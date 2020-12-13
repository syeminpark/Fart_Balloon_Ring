class rfcollide{
    constructor(){


        this.ringR=0
        this.ringT=0
        this.ringB=0

        this.bubL=0
        this.bubR=0
        this.bubT=0
        this.bubB=0
    
        

    }
    collide(){


        this.ringR=Ring.ring_R_edge
        this.ringT=Ring.ring_T_edge
        this.ringB=Ring.ring_B_edge

        this.bubL=FartBubble.posX-FartBubble.posZ/2
        this.bub=Ring[2].pos.xs
          // this.bubR=FartBubble.pos.x+FartBubble.pos.z/2
        // this.bubT=FartBubble.pos.y-FartBubble.pos.z/2
        // this.bubB=FartBubble.pos.y+FartBubble.pos.z/2

        fill(255)
        ellipse(width/2,height*0.1,this.bub)

        if((this.bubL< this.ringR && this.bubR> this.ringL) && (this.bubB>this.ringT && this.bubT<this.ringB)){
            
        }
    }
        

}
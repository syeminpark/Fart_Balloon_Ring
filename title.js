

class title{

    constructor(){
        this.it=0


    }

    header(){

        stroke(0)
        fill(255, 200, 100)
        textSize(100)
        strokeWeight(3)
        
        text('뿡', width * 0.01, height * 0.2),
        text('뿡', width * 0.86, height * 0.2),
        text('엿', width * 0.86, height * 0.45),
        text('엿', width * 0.01, height * 0.45),
        text('링', width * 0.01, height * 0.7),
        text('링', width * 0.86, height * 0.7)
        
    }

    instructText(){
    this.it=createP()


    this.it.style('font-size', '25px')

    this.it.html("Use fart buttons to place marridge rings on the middle finger.")
    return (this.it)
      
}
     delText(){

        this.it.remove()

     }
}
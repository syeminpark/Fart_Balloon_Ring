function mousePressed() {
bubbleNum=random(0,4)


  //left mask
 if(dist(mouseX,mouseY,width/5,height*0.87)<50 ||dist(mouseX,mouseY,width/4.5,height*0.78)<30 || dist(mouseX,mouseY,width/6.4,height*0.818)<32
    || dist(mouseX,mouseY,width/8,height*0.91)<30|| dist(mouseX,mouseY,width/5.05,height*0.93)<30|| dist(mouseX,mouseY,width/3.8,height*0.89)<30
    || dist(mouseX,mouseY,width/3.8,height*0.82)<22.5|| dist(mouseX,mouseY,width/3.4,height*0.79)<22.5 || dist(mouseX,mouseY,width/3,height*0.79)<20){
  for(let i=0;i<bubbleNum;i++){
     rightBubble = createVector(random(width / 2.3, width / 3), random(height / 1.3, height / 1.4),random(20,30))
    let p = new fartBubble(rightBubble,i,FartBubble);
    FartBubble.push(p)
    Sound.fartSound()
    createP('뿡')
    value=255
 
  }
}
else if(dist(mouseX,mouseY,width/5*4,height*0.87)<50 ||dist(mouseX,mouseY,width/4.5*3.5,height*0.78)<30 || dist(mouseX,mouseY,width/6.4*5.4,height*0.818)<32
   || dist(mouseX,mouseY,width/8*7,height*0.91)<30|| dist(mouseX,mouseY,width/5.05*4.05,height*0.93)<30|| dist(mouseX,mouseY,width/3.8*2.8,height*0.89)<30
   || dist(mouseX,mouseY,width/3.8*2.8,height*0.82)<22.5|| dist(mouseX,mouseY,width/3.4*2.4,height*0.79)<22.5 || dist(mouseX,mouseY,width/3*2,height*0.79)<20){
     for(let i=0;i<bubbleNum;i++){
       leftBubble = createVector(random(width * 0.6, width * 0.7), random(height / 1.4, height / 1.5),random(20,30))
     let p= new fartBubble(leftBubble,i,FartBubble);
     FartBubble.push(p)
     Sound.fartSound()
     createP('뿡')

    value=1
   }
 }
}
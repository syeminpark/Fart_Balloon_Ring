let Ass;
let Fart;
let FartBubble = [];
let Ring;
let Screen;
let Fingers;
let bubbleNum

let d
let value;

let friction = 0;
let buoyancy;
let current;

let rad1
let rad2

let spring =0.005


function setup() {
  createCanvas(800, 600);



  rad1 = width * 0.55 / 2
  rad2 = height / 2.5 / 2


  Fingers = new fingers();
  Ass = new ass();
  Fart = new fart();
  Ring = new ring();
  Screen = new screen(rad1, rad2);
}

function draw() {
  background(255, 100, 90);
  strokeWeight(10);

  Fart.show()
  Fart.mask()
  Ass.show()
  Screen.show()
  Fingers.show()
  Ring.show()
  Screen.outline()
  

  FartBubble.forEach(fartBubble =>{
    buoyancy = createVector(0, -0.05);
    current = createVector(random(-0.2, 0.2), 0)

    fartBubble.show()
    fartBubble.collide()
    fartBubble.move(buoyancy)
    fartBubble.move(current)
    fartBubble.edge(rad1, rad2)

})

for (let i = FartBubble.length - 1; i >= 0; i--) {
    if (FartBubble[i].pop()) {
      FartBubble.splice(i, 1);
    }
  }

  Screen.outline()
  title()
}



function mousePressed() {
bubbleNum=random(0,4)


  //left mask
 if(dist(mouseX,mouseY,width/5,height*0.87)<50 ||dist(mouseX,mouseY,width/4.5,height*0.78)<30 || dist(mouseX,mouseY,width/6.4,height*0.818)<32
    || dist(mouseX,mouseY,width/8,height*0.91)<30|| dist(mouseX,mouseY,width/5.05,height*0.93)<30|| dist(mouseX,mouseY,width/3.8,height*0.89)<30
    || dist(mouseX,mouseY,width/3.8,height*0.82)<22.5|| dist(mouseX,mouseY,width/3.4,height*0.79)<22.5 || dist(mouseX,mouseY,width/3,height*0.79)<20){
  for(let i=0;i<bubbleNum;i++){
     rightBubble = createVector(random(width / 2.4, width / 3.3), random(height / 1.9, height / 2),random(20,30))
    let p = new fartBubble(rightBubble,i,FartBubble);
    FartBubble.push(p)


    value=255
  }
}
else if(dist(mouseX,mouseY,width/5*4,height*0.87)<50 ||dist(mouseX,mouseY,width/4.5*3.5,height*0.78)<30 || dist(mouseX,mouseY,width/6.4*5.4,height*0.818)<32
   || dist(mouseX,mouseY,width/8*7,height*0.91)<30|| dist(mouseX,mouseY,width/5.05*4.05,height*0.93)<30|| dist(mouseX,mouseY,width/3.8*2.8,height*0.89)<30
   || dist(mouseX,mouseY,width/3.8*2.8,height*0.82)<22.5|| dist(mouseX,mouseY,width/3.4*2.4,height*0.79)<22.5 || dist(mouseX,mouseY,width/3*2,height*0.79)<20){
     for(let i=0;i<bubbleNum;i++){
       leftBubble = createVector(random(width * 0.6, width * 0.7), random(height / 1.9, height / 2),random(20,30))
     let p= new fartBubble(leftBubble,i,FartBubble);
     FartBubble.push(p)

    value=1
   }
 }
}



function title() {

    stroke(0)
    fill(255, 200, 100)
    textSize(100)
    strokeWeight(3)
    
    let textList=[
    text('뿡', width * 0.01, height * 0.2),
    text('뿡', width * 0.86, height * 0.2),
    text('엿', width * 0.86, height * 0.45),
    text('엿', width * 0.01, height * 0.45),
    text('링', width * 0.01, height * 0.7),
    text('링', width * 0.86, height * 0.7),
    ]
    return(textList)
}



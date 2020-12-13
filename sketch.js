let Ass;
let Fart;
let FartBubble = [];
let Ring=[]
let Screen;
let Fingers;
let bubbleNum
let Sound
let fartText
let instructText
let slider
let Title

let RingPos

let d
let value;

let friction = 0;
let buoyancy;
let current;
let gravity

let rad1
let rad2

let spring =0.005


function setup() {
  canvas= createCanvas(800, 600);



  gravity=createVector(0,0.01)

  //screen의 width/height이다

  rad1 = width * 0.55 / 2
  rad2 = height / 2.5 / 2

  Fingers = new fingers();
  Ass = new ass();
  Fart = new fart();
  Sound= new sound();
  Title=new title();

  for (let i=0;i<3;i++){

  RingPos=createVector(random(width/2.4,width/3),random(height*0.3,height*0.5))

    let a= new ring(RingPos,i,Ring); //width/2.05=center
    Ring.push(a)
  }
  Screen = new screen(rad1, rad2);
  slider= createSlider(50,300,100)

  slider.size(100,100)



  
  canvas.mouseOver(Title.instructText);
  canvas.mouseOut(Title.delText)
 
}

function draw() {
  // background(255, 100, 90);
  clear()
  strokeWeight(10);

  current = createVector(random(-0.2, 0.2), 0)

  Fart.show()
  Fart.mask()
  Ass.show()
  Screen.show()
  Fingers.show()

  Ring.forEach(ring =>{ 
  ring.collideFinger()
  
  ring.collideSelf()
  ring.collideBub()
  ring.show()
  ring.edge(rad1,rad2)
  ring.move(gravity)
  })
  

  Screen.outline()
  

  FartBubble.forEach(fartBubble =>{
    buoyancy = createVector(0, -0.05);
    current = createVector(random(-0.1, 0.1), 0)

    fartBubble.check(rad1,rad2)
    fartBubble.show(d)
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
  Title.header()
}


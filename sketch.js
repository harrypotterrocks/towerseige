const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var gameState = 'onSling'; 
var score = 0;


function setup(){
    var canvas = createCanvas(1350,655);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(950,200,50,50);
   box2 = new Box(700,200,50,50);
   box3 = new Box(750,200,50,50);
   box4 = new Box(800,200,50,50);
   box5 = new Box(850,200,50,50);
   box6 = new Box(900,100,50,50);
   box7 = new Box(900,100,50,50);
   box8 = new Box(750,100,50,50);
   box9 = new Box(800,100,50,50);
   box10 = new Box(850,200,50,50);
   box11 = new Box(800,100,50,50);
   box12= new Box(850,100,50,50);
   box13= new Box(820,0,50,50);

   box14 = new Box(290,490,50,50);
   box15 = new Box(340,490,50,50);
   box16 = new Box(390,490,50,50);
   box17 = new Box(440,490,50,50);
   box18 = new Box(490,490,50,50);
   box19 = new Box(540,490,50,50);
   box20 = new Box(410,190,50,50);
   box21 = new Box(340,390,50,50);
   box22 = new Box(390,390,50,50);
   box23 = new Box(440,390,50,50);
   box24 = new Box(490,390,50,50);
   box25 = new Box(390,290,50,50);
   box26 = new Box(440,290,50,50);
   
   

    ground = new Ground(818,300,400,20)
    ground2 = new Ground(410,520,400,20)
    player = new Player(200,100,50,50);
    slingshot = new Slingshot(player.body,{x:200,y:100});

}

function draw(){
    background(16, 29, 53);
    Engine.update(engine);
    push();
    textSize(35)
 stroke(33, 40, 48);
 fill(221, 104, 10);
    text("Score: "+ score, 1200, 50);
    pop();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();
    box25.display();
    box26.display();
    
    
   
    

    ground.display();
    slingshot.display();
    player.display();
    ground2.display();

    box1.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    box26.score();
    
}



function mouseReleased(){

}

function mouseDragged(){
    if(gameState === "onSling"){
    Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
    }
}
function mouseReleased(){
    slingshot.fly();
    gameState = "launched"

}
function keyPressed(){

    if(keyCode === 32 && player.body.speed < 1 || player.body.position.y > 400){ 
        slingshot.attach(player.body);
         Matter.Body.setPosition(player.body, {x: 200 , y: 100});
        gameState = "onSling";
        
     }
}

class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    
    World.add(world, this.body);
  }
 display(){
   var pos = this.body.position;
  rectMode(CENTER);
  if(this.body.speed>5){
    push();
    this.visibility = this.visibility-5;
    tint(255,this.visibility);
    fill(226, 96, 81,this.visibility);
  rect(pos.x, pos.y, this.width, this.height);
  pop(); 
  }else{
    push();
    tint(255);
    fill(226, 96, 81);
  rect(pos.x, pos.y, this.width, this.height);
  pop(); 
  }
  
}
 score(){
  if (this.visibility<0&&this.visibility>-500){
    score++;
  }
}
};



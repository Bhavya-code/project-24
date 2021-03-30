class Hammer {
  constructor(x, y) {
    var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':0.5
    }
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    var poi =this.body.position;
    poi.x = mouseX;
    poi.y = mouseY;
    var angle = this.body.angle;
    push();
    translate(poi.x,poi.y);
    rotate(angle)
    stroke("black");
    fill("yellow");
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    pop();
  }
}
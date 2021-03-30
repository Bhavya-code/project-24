class stone {
    constructor(x, y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.9,
        'density':12
      }
      this.body = Bodies.rectangle(x, y, width,height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var poi =this.body.position;
      var angle = this.body.angle;
      push();
      translate(poi.x,poi.y);
      rotate(angle)
      rectMode(CENTER);
      stroke(0);
      fill("gray");
      rect(0,0, this.width, this.height);
      pop();
    }
  }
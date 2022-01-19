class test {
  constructor(x, y, width, height,options) {

    var options = {
      
      'isStaic':false
      
  }
        

      this.body = Bodies.fromVertices(575,100,[{x:200 , y: 300},{x:300, y: 200}]);

    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    beginShape();
    vertex(575, 100);
    vertex(200, 300);
    vertex(300, 200);
    endShape(CLOSE);
    stroke("black");
    strokeWeight(3);

    rect(0, 0, this.width, this.height);
    pop();
  }
};

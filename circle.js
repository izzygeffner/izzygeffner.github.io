function Circle(x, y, r) {
    //create circle
    options = {
        friction: 0.7,
        restitution: 0.5
      };
    this.body = Bodies.circle(x, y, r, options);
    this.r = r;
    //add circle to world
    World.add(world, this.body);
    
    //draw circle
    this.show = function() {
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        //rotate(angle);
        fill(255);
        ellipse(x, y, r*2);
        pop();
    
    }
}

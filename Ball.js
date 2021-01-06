class Ball {
    constructor(x,y){
        var options={
            isStatic: false,
            restitution: 1.1,
            friction: 0.3,
            density: 1.2
        }
        this.body = Bodies.circle(x,y,25,options);
        this.diameter = 50    
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position
        push();
        translate(pos.x,pos.y);
        fill("blue")
        ellipseMode(CENTER);
        ellipse(0,0,this.diameter,this.diameter);
        pop();
    }
}
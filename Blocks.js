class Blocks{
    constructor(x,y,width,height){
        var options ={
            isStatic: false,
            restitution:0.8,
            friction: 0.3,
            density: 0.3
            
          }
          this.body=Bodies.rectangle(x,y,width,height,options)
          this.width=width;
          this.height=height;
          World.add(world,this.body);

    }
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       fill("white");
       stroke("blue")
       strokeWeight(4);
       rectMode(CENTER);
       rect(0,0,this.width,this.height);
       pop();
    }
}
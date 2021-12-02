class CannonBall{
    constructor(x,y){
       var options = {
          restitution: 0.8,
          friction: 1,
          isStatic: true,
          density: 1
       } 
       this.image = loadImage("assets/cannonball.png") 
       this.body = Bodies.circle(x,y,30,options);
       console.log(this.body)
       World.add(world,this.body);
       this.r = 40;
       
    }

    display(){
      var angle = this.body.angle
      var pos = this.body.position
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      imageMode(CENTER)
      image(this.image,0,0,30,30)
      pop()
    }

    shoot(){
       var velocity = p5.vector.fromAngle(Cannon.angle);
       velocity.mult(20);
       Matter.Body.setStatic(this.body,false);
       Matter.Body.setVelocity(this.body,{x:velocity.x,y:velocity.y})
    }
}
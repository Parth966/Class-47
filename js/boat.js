class Boat{
    constructor(x,y,w,h,p){
         var options = {
           restitution:0.8,
           friction:1,
           density:1
         }
         this.x = x
         this.y = y
         this.w = w
         this.h = h
         this.boatPos = p
         this.image = loadImage("assets/boat.png")
         this.body = Bodies.rectangle(x,y,w,h,options)
         World.add(world,this.body)
    }

    display(){
       var angle = this.body.angle
       var pos = this.body.position
       push();
       translate(pos.x,pos.y);
       rotate(angle);
       imageMode(CENTER)
       image(this.image,0,this.boatPos,this.w,this.h)
       pop();

    }

    animate(){
      this.speed += 0.05 % 1.1;
    }
}
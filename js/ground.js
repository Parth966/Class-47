class Ground{
    constructor(x,y,w,h){
       var options = {
          isStatic:true         
       }  
       this.body = Bodies.rectangle(x,y,w,h,options);
       console.log(this.body)
       World.add(world,this.body);
       this.w = w;
       this.h = h;
    }

    display(){
      var angle = this.body.angle
      var pos = this.body.position
      push()
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      rect(0,0,this.w,this.h)
      pop()
    }
}
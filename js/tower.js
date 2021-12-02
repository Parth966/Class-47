class Tower{
    constructor(x,y,w,h){
       var options = {
          isStatic:true         
       }  
       this.image = loadImage("assets/tower.png")
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
      imageMode(CENTER)
      image(this.image,0,0,this.w,this.h)
      pop()
    }
}
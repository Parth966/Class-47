class Cannon{
    constructor(x,y,w,h,angle){   
       this.canonImage = loadImage("assets/canon.png") 
       this.base = loadImage("assets/cannonBase.png")  
      // this.body = Bodies.rectangle(x,y,w,h);       
      // World.add(world,this.body);
       this.w = w;
       this.h = h;
       this.x = x;
       this.y = y;
       this.angle = angle;
    }    

    display(){
      if(keyIsDown(UP_ARROW) && this.angle > -1){
        this.angle -= 0.02
      }
      if(keyIsDown(DOWN_ARROW) && this.angle < +1){
        this.angle += 0.02
      }
      
     
    
      push()
      translate(this.x,this.y)
      rotate(this.angle)
      imageMode(CENTER)
      image(this.canonImage,0,0,this.w,this.h)      
      pop()
      image(this.base,20,17,200,200,PI,2*PI)
    }
}
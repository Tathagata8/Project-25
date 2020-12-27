class Dustbin{
    
    constructor (x,y){
            var options ={

            isStatic: true
            }
      this.x = x;
      this.y = y;
      this.dustbinWidth =200;
      this.dustbinHeight = 100;
      this.wallThickness = 20;
      this.angle = 0;

      this.leftbody = Bodies.rectangle(this.x -this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options);
      Matter.Body.setAngle(this.leftbody,this.angle);
      World.add(myworld,this.leftbody)
      
      this.bottombody = Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, options);
       World.add(myworld,this.bottombody);
      
       this.rightbody = Bodies.rectangle(this.x + this.dustbinWidth/2, this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, options);
       Matter.Body.setAngle(this.rightbody, -1*this.angle);
       World.add(myworld,this.rightbody);
      
       this.image = loadImage("dustbingreen/dustbingreen.png")
      
    }


        display(){
           var posbottom = this.bottombody.position;
           var posleft = this.leftbody.position;
           var posright = this.rightbody.position;

           push() 
           translate(posleft.x, posleft.y);
           imageMode(CENTER)
           image(this.image,0, 0, this.width, this.height);   
           fill("white");
           angleMode(RADIANS);
           rotate(this.angle);
           rect(0,0,this.wallThickness,this.dustbinHeight);
           pop()

           push() 
           translate(posright.x, posright.y);
           imageMode(CENTER)
           image(this.image,0, 0, this.width, this.height);   
           fill("white");
           angleMode(RADIANS);
           rotate(-1*this.angle);
           rect(0,0,this.wallThickness,this.dustbinHeight);
           pop();

           push() 
           translate(posbottom.x, posbottom.y);
           imageMode(CENTER)
           image(this.image,0, 0, this.width, this.height);   
           fill("white");
           angleMode(RADIANS);
           rotate(this.angle);
           rect(0,0,this.dustbinWidth,this.wallThickness);
           pop();

        }
}
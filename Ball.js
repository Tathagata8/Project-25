
class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image = loadImage("paper.png")
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(this.x,this.y,this.r/2,options);
       
        World.add(myworld,this.body);
    }
    display(){

        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);
       
        imageMode(CENTER)
        image(this.image,0, 0, this.width, this.height);
  
        strokeWeight(3);
        fill(255,0,255);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}

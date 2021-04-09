class Polygon {
    constructor(x,y){
        var options={
            restitution:0.8,
            friction:0.3,
            density:1.0
    
          }
       this.body=Bodies.rectangle(x,y,70,70,options);
       this.width=70;
        this.height=70;  
        this.image=loadImage("polygon.png")
        World.add(world,this.body);
        
    }
    
    display(){
       this.body.position.x=mouseX;
       this.body.position.y=mouseY;
        var angle=this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle)
        imageMode(CENTER);
        
        fill("red");
        image(this.image,0,0,this.width,this.height);
        pop();
    }
    
    
    }
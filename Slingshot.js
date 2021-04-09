class Slingshot{
    constructor(bodyA,pointB ){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10
         } // properties of a constraint
    this.pointB=pointB
       this.sling=Constraint.create(options); // creating a constraint
    World.add(world,this.sling); //adding constraint to the world
        
    
    
    }
    
    display(){
        
    
        
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        stroke("red")
        line(pointA.x,pointA.y,pointB.x,pointB.y);
      
        
    }
    
    fly(){ 
    this.sling.bodyA=null;
    
    
    }
    
    
    
    }
    
    
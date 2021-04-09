const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var box1,ground1,ground2,polygon,box2,box3,box4,box5,box6,box7,box8,box9;
var box10,box11,box12,box13,box14,box15,box16,box17,box18,ground3

function preload() {


}
function setup(){
    var canvas= createCanvas(1200,400);
    engine=Engine.create();
     world=engine.world;

    box1=new Box(610,100);
    box2=new Box(540,100);
    box3=new Box(470,100);
    box4=new Box(400,100);
    box5=new Box(575,50);
    box6=new Box(505,50);
    box7=new Box(435,50);
    box8=new Box(535,10);
    box9=new Box(465,10);


box10=new Box(1010,100);
box11=new Box(940,100);
box12=new Box(870,100);
box13=new Box(800,100);
box14=new Box(975,50);
box15=new Box(905,50);
box16=new Box(835,50);
box17=new Box(935,10);
box18=new Box(865,10);

ground1=new Ground(600,380,1200,20)
ground2=new Ground(500,250,300,10)
ground3=new Ground(900,250,300,10)
polygon=new Polygon(50,100)
slingshot=new Slingshot(polygon.body,{x:50,y:50})
}
function draw(){
    background("black")
    Engine.update(engine)
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()
box8.display()
box9.display()
box10.display()
box11.display()
box12.display()
box13.display()
box14.display()
box15.display()
box16.display()
box17.display()
box18.display()

ground3.display()
ground1.display()
ground2.display()

polygon.display()
slingshot.display()

}
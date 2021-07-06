var canvas;
var music;

var surface1;
var surface2;
var surface3;
var surface4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
surface1 = createSprite(100,500,200,100);
surface1.shapeColor = ("red");

surface2 = createSprite(300,500,200,100);
surface2.shapeColor = ("green");

surface3 = createSprite(500,500,200,100);
surface3.shapeColor = ("blue");

surface4 = createSprite(700,500,200,100);
surface4.shapeColor = ("yellow");



    //create box sprite and give velocity
 box = createSprite(200,200);
 box.shapeColor = ("white");
box.velocityY = 3;
box.velocityX = -2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    
  edges = createEdgeSprites();

  box.bounceOff(edges)


   
    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor = ("red")
        
    }

    
    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor = ("green")
    }

    
    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor = ("blue")
    }

    
    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor = ("yellow")
    }

    
    drawSprites();
}

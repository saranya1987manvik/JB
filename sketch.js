var block1,block2,block3,block4,ball,edge
var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    block1 = createSprite(0,580,360,30);
     block1.shapeColor = rgb(0,0,255);
    block2 = createSprite(295,580,200,30);
     block2.shapeColor = rgb(255,128,0);
    block3 = createSprite(515,580,200,30);
     block3.shapeColor = rgb(153,0,75);
     block4 = createSprite(740,580,220,30);
     block4.shapeColor = rgb(0,100,0);

     ball=createSprite(random(20,750),100,40,40)
     ball.shapeColor=rgb(255,255,255)
     ball.velocityX=5
     ball.velocityY=4




    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edge=createEdgeSprites()
    ball.bounceOff(edge)
    if(block1.isTouching(ball)){
        ball.velocityX=0
        ball.velocityY=0
        music.stop()
        
    }
    if(block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor = rgb(255,128,0); 
        music.play()
    }

    if(block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor = rgb(153,0,75); 
    }

    if(block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor = rgb(0,100,0); 
    }
    //create edgeSprite



    //add condition to check if box touching surface and make it box
    drawSprites()
}

var movingRect,fixedRect

function setup(){
    createCanvas(400,400)
     movingRect=createSprite(200,200,10,30);
     movingRect.shapeColor="green";
}

function draw()
{
    background(0);
    if (movingRect.x + movingRect.width/2 < 200
        || movingRect.y + movingRect.height/2 < 200) {
        movingRect.shapeColor = "red"
        }
        else {
        movingRect.shapeColor = "green";
        }

        drawSprites();
}
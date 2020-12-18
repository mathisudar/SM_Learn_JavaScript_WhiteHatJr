var Sofia = createSprite(20, 25, 18, 18);
Sofia.shapeColor = "yellow";
var wall1 = createSprite(10, 70, 100, 20);
wall1.shapeColor = "brown";
var wall1 = createSprite(10, 70, 100, 20);
wall1.shapeColor = "brown";
var wall2 = createSprite(100, 50, 20, 100);
wall2.shapeColor = "brown";
var wall3 = createSprite(80, 130, 100, 20);
wall3.shapeColor = "brown";
var wall4 = createSprite(50, 250, 20, 100);
wall4.shapeColor = "brown";
var wall5 = createSprite(130, 210, 100, 20);
wall5.shapeColor = "brown";
var wall6 = createSprite(10, 250, 100, 20);
wall6.shapeColor = "brown";
var wall7 = createSprite(160, 120, 20, 100);
wall7.shapeColor = "brown";
var wall8 = createSprite(150, 20, 100, 20);
wall8.shapeColor = "brown";
var wall9 = createSprite(250, 70, 20, 100);
wall9.shapeColor = "brown";
var wall10 = createSprite(270, 150, 100, 20);
wall10.shapeColor = "brown";
var wall11 = createSprite(330, 50, 100, 20);
wall11.shapeColor = "brown";
var wall12 = createSprite(340, 125, 20, 100);
wall12.shapeColor = "brown";
var wall13 = createSprite(220, 250, 20, 100);
wall13.shapeColor = "brown";
var wall14 = createSprite(330, 210, 150, 20);
wall14.shapeColor = "brown";
var wall15 = createSprite(100, 300, 20, 100);
wall15.shapeColor = "brown";
var wall16 = createSprite(180, 310, 100, 20);
wall16.shapeColor = "brown";
var wall17 = createSprite(30, 352, 20, 100);
wall17.shapeColor = "brown";
var wall18 = createSprite(175, 352, 20, 100);
wall18.shapeColor = "brown";
var wall19 = createSprite(280, 290, 20, 100);
wall19.shapeColor = "brown";
var wall20 = createSprite(350, 270, 120, 20);
wall20.shapeColor = "brown";
var wall21 = createSprite(250, 390, 100, 20);
wall21.shapeColor = "brown";
var wall22 = createSprite(330, 370, 20, 100);
wall22.shapeColor = "brown";
var target = createSprite(395, 375, 10, 50);
target.shapeColor = "yellow";

// 22 Walls - Game Condition
// Sofia  - Ball

function draw() {
    background("Pink");


    if (Sofia.isTouching(wall10) || Sofia.isTouching(wall11) || Sofia.isTouching(wall12)
        || Sofia.isTouching(wall13) || Sofia.isTouching(wall14) || Sofia.isTouching(wall15)
        || Sofia.isTouching(wall16) || Sofia.isTouching(wall17) || Sofia.isTouching(wall18)
        || Sofia.isTouching(wall19) || Sofia.isTouching(wall20) || Sofia.isTouching(wall21)
        || Sofia.isTouching(wall22)) {

        Sofia.x = 20;  // Back to initial position ?
        Sofia.y = 20;

    }

    Sofia.velocityX = 0; // Speed reset back to zero ?
    Sofia.velocityY = 0;

    if (Sofia.bounce(target)) {    // Final target location ?

        textSize(40);
        stroke("green");
        text("You win", 200, 200);


    }

    stroke(rgb(128, 128, 128));   // What is happening here ?

    if (keyDown("UP_ARROW")) {

        Sofia.velocityX = 0;
        Sofia.velocityY = -4;  // Going up ?


    }

    if (keyDown(DOWN_ARROW)) {

        Sofia.velocityX = 0;
        Sofia.velocityY = 4;

    }

    if (keyDown(LEFT_ARROW)) {

        Sofia.velocityX = -4;
        Sofia.velocityY = 0;

    }

    if (keyDown(RIGHT_ARROW)) {

        Sofia.velocityX = 4;
        Sofia.velocityY = 0;

    }

    Sofia.bounceOff(wall1);   // It is only bouncing - not going to initial location
    Sofia.bounceOff(wall2);
    Sofia.bounceOff(wall3);
    Sofia.bounceOff(wall4);
    Sofia.bounceOff(wall5);
    Sofia.bounceOff(wall6);
    Sofia.bounceOff(wall7);
    Sofia.bounceOff(wall8);
    Sofia.bounceOff(wall9);
    Sofia.bounceOff(wall10);
    Sofia.bounceOff(wall11);
    Sofia.bounceOff(wall12);
    Sofia.bounceOff(wall13);
    Sofia.bounceOff(wall14);
    Sofia.bounceOff(wall15);
    Sofia.bounceOff(wall16);
    Sofia.bounceOff(wall17);
    Sofia.bounceOff(wall18);
    Sofia.bounceOff(wall19);
    Sofia.bounceOff(wall20);
    Sofia.bounceOff(wall21);
    Sofia.bounceOff(wall22);



    Sofia.collide(target);

    createEdgeSprites();   // Creates boundary limits of canvas
    Sofia.bounceOff(edges); // bounce when it touches the edges

    textSize(19);
    textFont("Poppins");
    text("Cup", 360, 340);
    textSize(19);
    text("Sofia", 30, 43);

    drawSprites();  // dispaly all shapes

}
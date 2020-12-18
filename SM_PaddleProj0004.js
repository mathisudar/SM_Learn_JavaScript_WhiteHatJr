var thief = createSprite(0, 400, 10, 10);  // create a object-thief 

var laser1 = createSprite(100, 250, 200, 5) // Create laser Object1
laser1.shapeColor = "red";
laser1.velocityY = -3;

var laser2 = createSprite(300, 130, 200, 5) // Create laser Object2
laser2.shapeColor = "red";
laser2.velocityY = 3;



function draw() {

    background("lightgrey");
    drawSprites();          // Display all objects
    createEdgeSprites();    // Limiting the Laser Objects movements

    if (keyDown("UP_ARROW")) {

        thief.velocityX = 0;
        thief.velocityY = -4;

    }

    if (keyDown("DOWN_ARROW")) {

        thief.velocityX = 0;
        thief.velocityY = 4;

    }

    if (keyDown("LEFT_ARROW")) {

        thief.velocityX = -4;
        thief.velocityY = 0;

    }

    if (keyDown("RIGHT_ARROW")) {

        thief.velocityX = 4;
        thief.velocityY = 0;

    }

    laser1.bounceOff(edges);
    laser2.bounceOff(edges);

    if (thief.isTouching(laser1) || thief.isTouching(laser2)) {

        stroke(0);
        fill(0);
        textSize(12);
        text("Thief caught got", 120, 200);
        laser1.setVelocity(0, 0);
        laser2.setVelocity(0, 0);
        thief.setVelocity(0, 0);

    }

    fill("yellow");
    shape(390, 0, 380, 10, 390, 20, 400, 10);  // // What is happening here ?


}


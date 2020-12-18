var shootingSquaraid = createSprite(200, 60, 20, 20);
shootingSquaraid.shapeColor = "white";
shootingSquaraid.velocityX = 4;
shootingSquaraid.velocityY = 0.5;
var pin1 = createSprite(200, 300, 20, 20);
var pin2 = createSprite(180, 320, 20, 20);
var pin3 = createSprite(220, 320, 20, 20);
var pin4 = createSprite(160, 340, 20, 20);
var pin5 = createSprite(200, 340, 20, 20);
var pin6 = createSprite(240, 340, 20, 20);


function draw() {
    background("lightgrey");
    drawSprites();

    createEdgeSprites();

    shootingSquaraid.bounceOff(edges);
    pin1.bounceOff(edges);
    pin2.bounceOff(edges);
    pin3.bounceOff(edges);
    pin4.bounceOff(edges);
    pin5.bounceOff(edges);
    pin6.bounceOff(edges);

    shootingSquaraid.bounce(pin1);
    shootingSquaraid.bounce(pin2);
    shootingSquaraid.bounce(pin3);
    shootingSquaraid.bounce(pin4);
    shootingSquaraid.bounce(pin5);
    shootingSquaraid.bounce(pin6);

    pin1.bounce(pin2);
    pin1.bounce(pin3);
    pin1.bounce(pin4);
    pin1.bounce(pin5);
    pin1.bounce(pin6);

    pin2.bounce(pin3);
    pin2.bounce(pin4);
    pin2.bounce(pin5);
    pin2.bounce(pin6);

    pin3.bounce(pin4);
    pin3.bounce(pin5);
    pin3.bounce(pin6);

    pin4.bounce(pin5);
    pin4.bounce(pin6);

    pin5.bounce(pin6);
}

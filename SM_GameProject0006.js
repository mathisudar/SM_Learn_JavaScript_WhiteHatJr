var striker = createSprite(200, 200, 10, 10);
striker.shapeColor = "white";

var comMallet = createSprite(200, 50, 50, 10);
comMallet.shapeColor = "black";

var playMallet = createSprite(200, 350, 50, 10);
playMallet.shapeColor = "black";

var goal1 = createSprite(200, 28, 100, 20);
goal1.shapeColor = "yellow";

var goal2 = createSprite(200, 372, 100, 20);
goal2.shapeColor = "yellow";

var boundary1 = createSprite(20, 4, 5, 800);
boundary1.shapeColor = "white";

var boundary2 = createSprite(380, 4, 5, 800);
boundary2.shapeColor = "white";

var boundary3 = createSprite(0, 10, 800, 5);
boundary3.shapeColor = "white";

var boundary4 = createSprite(0, 390, 800, 5);
boundary4.shapeColor = "white";

var boundary5 = createSprite(0, 120, 800, 5);
boundary5.shapeColor = "white";

var boundary6 = createSprite(0, 280, 800, 5);
boundary6.shapeColor = "white";

var gameState = "serve";

var compScore = 0;
var playerScore = 0;

function draw() {
    background("green");
    drawSprites();
    createEdgeSprites();

    if (keyDown("UP_ARROW")) {
        playMallet.velocityX = 0;
        playMallet.velocityY = -4;

    }

    if (keyDown("DOWN_ARROW")) {
        playMallet.velocityX = 0;
        playMallet.velocityY = 4;

    }

    if (keyDown("LEFT_ARROW")) {
        playMallet.velocityX = -4;
        playMallet.velocityY = 0;

    }

    if (keyDown("RIGHT_ARROW")) {
        playMallet.velocityX = 4;
        playMallet.velocityY = 0;

    }

    if (gameState === "serve") {
        textSize(18);
        fill("black");
        text("Press Space to Strike", 130, 180);
    }
    text(compScore, 30, 180);
    text(playerScore, 30, 230);

    if (keyDown("space") && gameState === "serve") {
        serve();
        gameState = "play";
    }

    for (var i = 0; i < 400; i = i + 20) {
        line(i, 200, i + 10, 200);
    }

    if (striker.isTouching(goal1) || striker.isTouching(goal2)) {
        if (striker.isTouching(goal1)) {
            playerScore = playerScore + 1;
        }

        if (striker.isTouching(goal2)) {
            compScore = compScore + 1;
        }

        reset();
        gameState = "serve";
    }

    if (playerScore === 5 || compScore === 5) {
        gameState = "over";
        textSize(16);
        fill("black");
        text("Game Over!", 170, 160);
        text("Press 'R' to Restart", 150, 180);
    }

    if (keyDown("r") && gameState === "over") {
        gameState = "serve";
        compScore = 0;
        playerScore = 0;
    }

    comMallet.x = striker.x;

    playMallet.bounceOff(boundary1);
    playMallet.bounceOff(boundary2);
    playMallet.bounceOff(boundary3);
    playMallet.bounceOff(boundary4);

    comMallet.bounceOff(boundary1);
    comMallet.bounceOff(boundary2);
    comMallet.bounceOff(boundary3);
    comMallet.bounceOff(boundary4);

    striker.bounceOff(boundary1);
    striker.bounceOff(boundary2);
    striker.bounceOff(boundary3);
    striker.bounceOff(boundary4);
    striker.bounceOff(playMallet);
    striker.bounceOff(comMallet);

}

function serve() {
    striker.velocityX = 3;
    striker.velocityY = 2;
}

function reset() {
    striker.x = 200;
    striker.y = 200;
    striker.velocityX = 0;
    striker.velocityY = 0;
}

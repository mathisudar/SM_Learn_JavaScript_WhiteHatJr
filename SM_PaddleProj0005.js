for (var i = 50; i < 400; i = i + 50) {
    var pumpkin = createSprite(i, 50, 20, 20); // (50,50 20,20)
    var tomato = createSprite(i, 100, 20, 20); // (50,100 20,20)
    var mushroom = createSprite(i, 150, 20, 20);
    var brinjal = createSprite(i, 200, 20, 20);
    var carrot = createSprite(i, 250, 20, 20);
    var spinach = createSprite(i, 300, 20, 20);

}

function draw() {

    background(rgb(139, 69, 19));
    drawSprites();

}

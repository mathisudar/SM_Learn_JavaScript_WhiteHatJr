for (var i = 50; i < 400; i = i + 50) {

    var tomato = createSprite(i, 50, 20, 20);
    tomato.setAnimation("tomato");
    var orange = createSprite(i, 120, 20, 20);
    orange.setAnimation("orange");
    var brinjal = createSprite(i, 190, 20, 20);
    brinjal.setAnimation("brinjal");
    var carrot = createSprite(i, 260, 20, 20);
    carrot.setAnimation("carrot");
    var onion = createSprite(i, 330, 20, 20);
    onion.setAnimation("onion");

}

function draw() {

    background(rgb(139, 69, 19));
    drawSprites();

} 

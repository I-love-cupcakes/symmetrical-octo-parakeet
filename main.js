img = "";

function preload()
{
    img = loadImage('fruits_basket_take2.png');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#F4F1DE");
    text("Pineapple", 180, 410);
    noFill();
    stroke("#E71D36");
    rect(120, 185, 220, 250);

    fill("#DE3C4B");
    text("Banana", 170, 15);
    noFill();
    stroke("#216869");
    rect(140, 0, 180, 140);

    fill("#2E294E");
    text("Papaya", 160, 130);
    noFill();
    stroke("#C5D86D");
    rect(40, 100, 170, 160);

    fill("#B4EDD2");
    text("Pomegranate", 140, 250);
    noFill();
    stroke("#26C485");
    rect(130, 200, 100, 100);

    fill("#E5FCFF");
    text("Watermelon", 520, 110);
    noFill();
    stroke("#FCFF4B");
    rect(510, 90, 130, 230);

    fill("#3D2645");
    text("Dragon Fruit", 390, 110);
    noFill();
    stroke("#A3E7FC");
    rect(380, 40, 130, 100);

    fill("#FFFFFFF");
    text("Kiwi", 460, 200);
    noFill();
    stroke("#44AF69");
    rect(440, 190, 70, 70);

    fill("#0B5351");
    text("Lemon", 90, 60);
    noFill();
    stroke("#E75A7C");
    rect(80, 40, 90, 80);
}
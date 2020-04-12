

function setup() {
createCanvas(600, 480);

}

 
function draw() {

  background(255,186,186);
  
  //ME//
noStroke();

  //hair// 
  fill(83,76,79);
  rect(290, 140, 220, 203);
  arc(400, 140, 220, 200, PI, TWO_PI);
  fill(100)
 
  //face//
  fill(252, 221, 187);
  ellipse(400, 184, 190, 230);
  fill(83,76,79)
  
  
    //eyebrows//
  arc(358, 145, 40, 7, PI, TWO_PI);
  arc(445, 145, 50, 7, PI, TWO_PI);
  
  //bangs//
  triangle(400, 50, 261, 300, 328, 80);
  fill(83,76,79);
  ellipse(455, 240, 5, 5);
  
  //ear//
    fill(252, 221, 187);
    ellipse(455, 190, 95, 60);

  //earring//
    fill(236,223, 122);
    ellipse(500, 210, 10, 30);
  
  //right eye//
    fill(255);
  ellipse(440, 180, 50, 30);
      fill(100);
  ellipse(440, 180, 25, 25, PI, TWO_PI);
  
 
  

    //mouth//
    fill(236,131,128);
    arc(400, 240, 40, 50, 19, 3.14);
  fill(255,186,186);
  ellipse(400, 260, 20, 10);

  
//body//
fill(58, 49, 111);
rect(315, 320, 180, 160, 50, 50, 1, 1);
    fill(255,104, 31);
rect(315, 380, 180, 10, 1, 1, 1, 1);
  fill(221,121, 162);
rect(315, 400, 180, 10, 1, 1, 1, 1);

  
//neck//
      fill(252, 221, 187);
    rect(380, 275, 40, 60, 90, 90, 50, 20);


  //glasses//
//rect(a, b, c, d, r)
  stroke(122, 128, 210);
noFill();
rect(410, 150, 65, 55, 25);
rect(325, 150, 65, 55, 25);
line(390, 170, 410, 170);
line(475, 170, 495, 170);
strokeWeight(4)
  stroke(1)

  //wink//
 arc(360, 185, 40, 20, PI, TWO_PI);
 
    //eyelashes//
line(335, 170, 340, 180);
  line(350, 165, 350, 175);
  
  //blush//
  stroke(238,201,208);
    line(350, 230, 360, 240);
    line(340, 230, 350, 240);
    line(440, 230, 450, 240);
    line(450, 230, 460, 240);
  
    //nose//
noFill();
  stroke(243, 192, 151);
    arc(400,220, 15, 20, PI, TWO_PI);
  
  //flower clip//
  //draw petals
fill(220,150,161);
ellipse(460, 90, 30, 30);
ellipse(460, 110, 30, 30);
ellipse(480, 90, 30, 30);
ellipse(480, 110, 30, 30);

//draw middle part
fill(255, 235, 122);
ellipse(470, 100, 20, 20);
  
  
    //bubble speech//
      fill(255);
  stroke(1);
  rect(40, 105, 185, 105);
  fill(1);
  rect(42, 109, 10, 10);
  rect(35, 120, 10, 90);
  rect(42, 209, 10, 10);
  rect(42, 209, 170, 10);
  rect(215, 202, 10, 10);
  rect(223, 117, 10, 85);
  rect(50, 95, 160, 10);
   rect(210, 109, 13, 10);

  //blackborders//
   rect(135, 209, 10, 40);
   rect(140, 240, 40, 20);
   rect(160, 260, 40, 10);
   rect(180, 270, 20, 10);
   rect(190, 240, 5, 17);
   rect(170, 220, 20, 17);
  
  //whitespace//
  fill(255);
  stroke(255);
  rect(145, 209, 40, 40);
  rect(170, 240, 20, 20);
  rect(189, 260, 10, 10);

//message//
  textSize(28);
  fill(100);
text("Hi! I'm Julee", 60, 160);
  textSize(20);
text("💖＼(≧▽≦)／🦄", 65, 191); 

}
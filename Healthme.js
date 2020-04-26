var ballx = 300;
var bally = 300;
var ballSize = 40;
var score =0;
var gameState= "L1";
var y = 300;
var d = 70;

function preload() {
  
    img1 = loadImage('https://julesaur.github.io/dabvictory.gif');
}
function setup() {
  createCanvas(600, 550);
  textAlign(CENTER);
  textSize(20);
} // end setup


function draw() {
  background(111, 222, 196);
  fill(237, 34, 93);
  
  if (gameState=="L1"){
  levelOne();
  } 
   
  if (gameState=="L2"){
   levelTwo(); 
    fill(2, 34, 93);
  }
  if (gameState=="L3"){
   levelThree();  
  }
    fill(255);
  text(("Found Me " + score), width/2, 40);
  
    if (gameState=="L4"){
   levelFour();  
  }

  

} // end draw


function levelOne(){
  
 for (var y = 0;   y <=  height;  y +=  40) {    
 for (var x = 0;   x <=  width   ;  x +=  40) {
     ellipse(x ,  y, 40, 40);
 }}
  
fill(255);
  text("Level 1", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>15){
// call level 2
 // fill(random(255));
 gameState= "L2";
  }
  fill(237, 34, 93);
  ellipse(ballx, bally, ballSize, ballSize);
  vertex(ballx, bally, mouseX, mouseY);
  
} // end level one

function levelTwo(){
  background(237, 34, 93);
   for (var y = 0;   y <=  height;  y +=  40) {    
 for (var x = 0;   x <=  width   ;  x +=  40) {
     rect(x ,  y, 40, 40);
 }}
    
fill(255);
  text("Level 2", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/1){
    ballx = random(width);
    bally= random(height);
    score= score +1;
  }
  if(score>25){
// level 3
   gameState = "L3";

  }
  
  fill(237, 34, 93);
  rect(ballx, bally, ballSize, ballSize);
} // end level two

function levelThree(){
  background(111,222,196);
  stroke(57,210,174);
    fill(57,210,174);
   for (var y = 0;   y <=  height;  y +=  40) {    
 for (var x = 0;   x <=  width   ;  x +=  40) {
     ellipse(x ,  y, 40, 40);
 }}
  fill(255);
  text("Level 3", width/2, height-20);
  var distToBall= dist(ballx, bally, mouseX, mouseY);
  if (distToBall <ballSize/2){
    ballx = random(width);
    bally= random(height);
    ballSize=ballSize -1;
    score= score +1;
  }
  if(score>40){
// end of game
   gameState = "L4";
  }
//  
   fill(57,210,174);
  ellipse(ballx, bally, ballSize, ballSize);

} 

//level four
function levelFour(){
  background(255, 20, 147);
  textSize(28);
 text("Game Over", width/2, 40);
image(img1, 130, 135, 300, 300);
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
text("Congrats!", 120, 140);
  textSize(20);
  text("You completed", 130, 160);
   textSize(20);
   text("the game (¬‿¬ )", 140, 180);


} //end of game!!

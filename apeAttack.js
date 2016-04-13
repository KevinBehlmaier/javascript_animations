void setup() {
  size(400, 400);
}
    
var bodyX = 206;
var bodyY = 244;
var bodyW = 118;
var bodyH = bodyW/2;

draw = function() {
    noStroke();
    background(207, 254, 255);
        fill(56, 30, 2);
    ellipse(bodyX,bodyY-85,bodyW*219/118,300); //head
    fill(240, 209, 36); //muzzle
    ellipse(bodyX, bodyY, bodyW, 106); // body?
    ellipse(bodyX, bodyY-70, bodyH, 47); // face?
    fill(5, 4, 4); //nostrils and mouth
    ellipse(bodyX+10,bodyY-70,10,10); //nostril
    ellipse(bodyX-10,bodyY-70,10,10); //nostril
    stroke(8, 7, 7); //mouth
    line(bodyX+60,bodyY,142,230); //mouth
    noStroke();
    fill(255, 255, 255); //eyes
    ellipse(bodyX+35, bodyY-125, bodyW*49/118, 26); //eyes
    ellipse(bodyX-35, bodyY-125, bodyW*49/118,26); //eyes
    fill(0, 0, 0);
    ellipse(bodyX+45,bodyY-125,bodyW*10/59, 20); //pupils
    ellipse(bodyX-25,bodyY-125,bodyW*10/59,20); //pupils
    fill(56, 30, 2);
     arc(bodyX+90,bodyY-120, bodyW*148/118,137,-113,97); //ears
    arc(bodyX-90,bodyY-120,bodyW*146/118,137,86,293); //ears
    
    bodyW--;
    
   
    
   
    
    
};

void setup() {
  size(400, 400);
}
var xPos = 8;
var yPos = 9;

var x = 350;
var y = 105;


draw = function() {
    
    background(29, 40, 115);
    fill(255, 242, 0);
    
  rect(xPos, yPos, 20, 20);
  ellipse(150,150,5,5);
   ellipse(85,108,5,5);
    ellipse(311,46,5,5);
     ellipse(74,8,5,5);
      ellipse(9,150,5,5);
       ellipse(313,244,5,5);
        ellipse(183,27,5,5);
         ellipse(249,87,5,5);
          ellipse(101,48,5,5);
           ellipse(42,58,5,5);
           
           
    fill(94, 90, 90);
    ellipse(x, y,-211,7);
    
    fill(105, 224, 121);
    ellipse(x,y,-41,3);


    
    fill(5, 4, 4);
rect(50,162,42,238);
rect(166,353,186,49);
triangle(202,294,273,362,163,362);
rect(365,198,42,238);

xPos += 35; 
yPos +=25;
x --;


};






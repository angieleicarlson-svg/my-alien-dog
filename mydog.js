function setup() {
  createCanvas(1000, 1000);
}

function draw() {

  background(103,189,170)
  //Background (r, g, b)
  arc(50, 530, 200, 300, 14, PI + HALF_PI);
    noFill();

  arc(190, 700, 200, 300, 14, PI + HALF_PI);
  //arc first coord is the x and y of the center
  // sec third number is how wide the circle is 
  // fourth is how tall the circle is
  arc(910, 670, 200, 300, 14, PI + HALF_PI);
  arc(910, 370, 200, 300, 14, PI + HALF_PI);
  fill("yellow");
  
  quad(910, 520, 910, 220, 50, 380, 190, 550);
  //quad(860, 420, 860, 120, 0, 280, 140, 450);
   // each coord pair is (500, 420)... and so on. Goes by twos
  //quad(500, 420 (Bottom), 860, 300(right), 500, 180 (top), 140, 300(left));  
  
  arc(1005, 280, 200, 300, 9, TWO_PI );
  
  
  arc(149, 400, 200, 200, HALF_PI, PI+HALF_PI+QUARTER_PI-1); //neck
 
  fill("yellow")
 triangle(180, 170, 180, 40, 400, 105); //head
 
  fill("black")
  triangle(350, 90, 350, 120, 400, 105); //nose
  arc(250, 68, 50, 50, 0, PI + QUARTER_PI-0.21, OPEN); //upper eye
  arc(250, 145, 50, 50, HALF_PI+1.1, QUARTER_PI-0.89, OPEN); //lower eye
  noFill();
  describe('A white rhombus with a black outline drawn on a gray canvas.');
}
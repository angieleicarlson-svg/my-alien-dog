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
  fill("yellow");
    noFill();
fill("yellow")
  quad(910, 520, 910, 220, 50, 380, 190, 550);
  //quad(860, 420, 860, 120, 0, 280, 140, 450);
   // each coord pair is (500, 420)... and so on. Goes by twos
  //quad(500, 420 (Bottom), 860, 300(right), 500, 180 (top), 140, 300(left));  
      noFill();

  arc(1005, 280, 200, 300, 9, TWO_PI );
      noFill();


  arc(122, 368, 200, 200, HALF_PI, PI+HALF_PI+QUARTER_PI-1); //neck
   noFill();

  fill("yellow")
 triangle(102, 338, 102, 208, 322, 273); //head
   noFill();

  fill("black")
  triangle(272, 259, 272, 287, 332, 273); //nose
  arc(172, 236, 50, 50, 0, PI + QUARTER_PI-0.21, OPEN); //upper eye
  arc(172, 313, 50, 50, HALF_PI+1.1, QUARTER_PI-0.89, OPEN); //lower eye
  noFill();
  describe('A white rhombus with a black outline drawn on a gray canvas.');
}
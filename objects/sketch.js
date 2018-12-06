//create an empty array called balls
let median = [];
let obstacle= [];
let d;
let leftmedian = [];
let rightmedian = [];
let z = [151, 181, 229,255];


let jeremy;

let crashed = false;


function setup() {
  	createCanvas(500, 400);
    d = new Dashes (250,10, 6.5);
    jeremy= new Ball (250, 310, 6);


}

function draw(){
 background(z[0],z[1],z[2],z[3]);


//OBSTACLES
// every time the framecount is divisible by 200, make a new car and put it into the obstacle group
 if (frameCount % 90 == 0) {
     let  c = new cars(50,-75,7);
     obstacle.push(c);
  //   console.log(obstacle);
   }

   if (frameCount % 60 == 0) {
       let  c = new cars(210,-75,7);
       obstacle.push(c);
      // console.log(obstacle);
     }

     if (frameCount % 80 == 0) {
         let  c = new cars(410,-75,7);
         obstacle.push(c);
        // console.log(obstacle);
       }



//	draw and move all the crafty cars
    for (let i = 0; i < obstacle.length; i++) {
        obstacle[i].drawCar();
        obstacle[i].movecars();
        obstacle[i].crash();
     }

//

    if (frameCount % 200 == 0) {
       z=[random(255), random(255), random(255), 255];
      }




     d.drawDash();
     d.moveDash();
     jeremy.drawBall();
     jeremy.moveBall();




     if (frameCount % 25 == 0) {
         let  b = new Dashes(250,10,6.5);
         median.push(b);
        // console.log(median); //print the balls array to the console
      }



//	draw all the balls in that array
	for (let i = 0; i < median.length; i++) {
	 	      median[i].drawDash();
       	  median[i].moveDash();

	  }

    if (frameCount % 25 == 0) {
        let  b = new Dashes(100,10,6.5);
        leftmedian.push(b);
        //console.log(leftmedian); //print the balls array to the console
      }

  //	draw all the balls in that array
  	for (let i = 0; i < median.length; i++) {
  	 	      leftmedian[i].drawDash();
         	  leftmedian[i].moveDash();

  	  }

      if (frameCount % 25 == 0) {
          let  b = new Dashes(400,10,6.5);
          rightmedian.push(b);
        //  console.log(rightmedian); //print the balls array to the console
        }

    //	draw all the balls in that array
    	for (let i = 0; i < median.length; i++) {
    	 	      rightmedian[i].drawDash();
           	  rightmedian[i].moveDash();

    	  }

        stroke("gray")
        line (167, 0, 167,500)
        line  (334,0, 334, 500)

      // rect(250,250,55,90)
      // fill("black")

}




//
// function drawCar(){
//   fill("red");
//   rect(40, 60, 75, 85);
//   fill("black");
//   rect(50, 80, 55, 55);
// }

class cars{
  constructor(x,y, speed){
        this.x = x;
        this.y = y;
        this.speed = speed;
        }

   drawCar(){
            fill("black");
            rect(this.x, this.y, 75, 85);
            fill("black");
            rect(this.x+10, this.y+20, 55, 55);
  }
  movecars(){

   if(crashed == false){
     this.y = this.y + this.speed;
   }
  else if (crashed == true){
    this.y = this.y;
  }

  //if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  }

  crash(){

// this.x >= jeremy.x-20 && this.x<= jeremy.x+20 &&
    if (this.y+85 >= jeremy.y-20 && this.y+85 <= jeremy.y+20 && jeremy.x >= this.x && jeremy.x<=this.x+75){
      crashed = true;
      fill("black")
      rect(0,0, 500,400);
      print("crashed!");
      }

      // if (this.x+75 >= jeremy.x-20 && this.x+75<= jeremy.x+20 && this.y >= jeremy.y-20 && this.y <= jeremy.y+20){
      //   fill("black")
      //   rect(0,0, 500,400);
      //   print("crashed!");
      //   }
      //
      //   if (this.x >= jeremy.x-20 && this.x<= jeremy.x+20 && this.y+85 >= jeremy.y-20 && this.y+85 <= jeremy.y+20){
      //     fill("black")
      //     rect(0,0, 500,400);
      //     print("crashed!");
      //     }
      //
      //     if (this.x +75 >= jeremy.x-20 && this.x+ 75<= jeremy.x+20 && this.y +85 >= jeremy.y-20 && this.y +85 <= jeremy.y+20){
      //       fill("black")
      //       rect(0,0, 500,400);
      //       print("crashed!");
      //       }
    // jeremy.x+20, jeremy.y+20
    // jeremy.x-20, jeremy.y-20
    //
    this.x+43, this.y+43
    this.x-43,this.y-43

  }





}


class Dashes {

	//every ball needs an x value, a y value, and a speed
	constructor(x,y, speed){
		this.x = x;
    		this.y = y;

        	this.speed = speed;
	}

	// draw a ball on the screen at x,y
	drawDash(){
    		stroke("yellow");
        strokeWeight(8);
    		fill("yellow");
        line(this.x,this.y,this.x,this.y+30)
	}

	//update the location of the ball, so it moves across the screen
	moveDash(){
     if(crashed == false){
		this.y = this.y+ this.speed;
    }
    else if (crashed == true){
      this.y = this.y;
    }



	//if the ball hits the paddle, change the speed value to negative (send it in the opposite direction)
  }
}

class Ball {

  constructor(x,y, speed){
    this.x = x;
        this.y = y;

          this.speed = speed;
  }



drawBall(){

  fill("black")
  noStroke();
  ellipse(this.x, this.y, 40,40);
  line(this.x,this.y,this.x,this.y+30)

strokeWeight(2)
stroke("black")
  line(this.x, this.y,250, 400);

}


  moveBall(){
    if (keyIsDown(LEFT_ARROW)) { //if you hold the up arrow, move up by speed
       this.x = this.x - this.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) { // if you hold the down arrow, move down by speed
        this.x = this.x+ this.speed;
    }

      if(keyIsDown(UP_ARROW)) {
        this.y=this.y-this.speed;

      }

        if(keyIsDown(DOWN_ARROW)) {
          this.y=this.y+this.speed;
        }
    }

}

var ballX = 400;
var ballY = 300;
var ballSpeedX = 7;
var ballSpeedY = 5;
var paddle1Y = 250;
var paddle2Y = 250;
var p1score = 0;
var p2score = 0;

function setup() {
	createCanvas(800,600);
	setInterval(doBoth, 1000/60);
}

function doBoth() {
	draw();
	move();
}

function draw() {
	background(0);
	fill(255);
	ellipse(ballX, ballY, 25, 25);
	rect(790, paddle1Y, 10, 100);
	rect (0, paddle2Y, 10, 100);
	if(mouseIsPressed) {
		paddle2Y+=4;
	} else {
		paddle2Y-=4;
	}
	text(p2score, 100, 100);
	text(p1score, 700, 100);
}

function move() {
	computerMovement();
	ballX += ballSpeedX;
	ballY += ballSpeedY;
	if(ballX >= 787.5) {
		if(ballY >= paddle1Y && ballY <= paddle1Y+100) {
			ballSpeedX = -ballSpeedX;
		} else {
			reset();
			p2score++;
		}
	}
	if(ballX <= 12.5) {
		if(ballY >= paddle2Y && ballY <= paddle2Y+100) {
			ballSpeedX = -ballSpeedX;
		} else {
			reset();
			p1score++;
		}
	}
	if(ballY > 587.5) {
		ballSpeedY = -ballSpeedY;
	}
	if(ballY < 12.5) {
		ballSpeedY = -ballSpeedY;
	}
}

function reset() {
	ballX = 400;
	ballY = 300;
	ballSpeedY = 6;
	ballSpeedX = -ballSpeedX;
}

function computerMovement() {
	if(paddle1Y < ballY - 50 + 6) {
		paddle1Y += 4;
	} else if(paddle1Y > ballY - 50 - 6) {
		paddle1Y -= 4;
	}
}
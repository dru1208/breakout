import { initialPaddleX, paddleY, paddleWidth, paddleHeight, canvasWidth, canvasHeight } from "../constants/constants.js"

export const drawPaddle = (gameBoard) => {
	const paddle = gameBoard.getPaddle();
	const context = gameBoard.getContext();
	const { paddleX, paddleY, paddleWith, paddleHeight } = paddle.getPaddleDrawingConfig()
	context.beginPath();
	context.fillStyle = "red";
	context.clearRect(0, paddleY - paddleHeight + 20, canvasWidth, paddleHeight * 2)
	context.fillRect(paddleX, paddleY, paddleWidth, paddleHeight);
	context.closePath();
}


export const drawBrick = (context, brick) => {
	const { location, width, height, color } = brick.getDrawingConfig();
	const { xCoordinate, yCoordinate } = location;
	context.beginPath();
	context.fillStyle = color;
	context.fillRect(xCoordinate, yCoordinate, width, height)
	context.closePath();
}

export const drawBricks = (gameBoard) => {
	const context = gameBoard.getContext();
	const bricks = gameBoard.getBricks();
	for (let row in bricks) {
		bricks[row].forEach(brick => drawBrick(context, brick))
	}
}

export const drawBall = (gameBoard) => {
	const ball = gameBoard.getBall();
	const context = gameBoard.getContext();
	const { location, radius, startingAngle, endingAngle } = ball.getDrawingConfig();	
	console.log(location)
	const { xCoordinate, yCoordinate } = location;
	context.beginPath();
	context.arc(xCoordinate, yCoordinate, radius, startingAngle, endingAngle);
	context.fill();
	context.closePath();
}
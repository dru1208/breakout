import { initialPaddleX, paddleY, paddleWidth, paddleHeight, canvasWidth, canvasHeight } from "../constants/constants.js"

export const drawPaddle = (gameBoard) => {
	const paddle = gameBoard.getPaddle();
	const context = gameBoard.getContext();
	const { x, y, width, height } = paddle.getPaddleConfig()
	const paddleX = x - (width / 2);
	const paddleY = y - height;
	context.beginPath();
	context.fillStyle = "red";
	context.fillRect(paddleX, paddleY, width, height);
	context.closePath();
}


const drawBrick = (context, brick) => {
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
	const { xCoordinate, yCoordinate } = location;
	context.beginPath();
	context.arc(xCoordinate, yCoordinate, radius, startingAngle, endingAngle);
	context.fill();
	context.closePath();
}

export const clearBoard = (gameBoard) => {
	const context = gameBoard.getContext();
	context.beginPath();
	context.clearRect(0, 0, canvasWidth, canvasHeight);
	context.closePath();
}
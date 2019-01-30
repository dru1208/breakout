import Brick from "./brick.js"
import Paddle from "./paddle.js"
import Ball from "./ball.js"
import { brickRows, brickColumns, brickWidth, canvasWidth, canvasHeight, colorScheme } from "../../constants/constants.js"

class GameBoard {
	constructor(context) {
		this.width = canvasWidth;
		this.height = canvasHeight;
		this.bricks = {};
		this.paddle = new Paddle();
		this.ball = new Ball();
		this.context = context;
		this.brickRows = brickRows;
		this.brickColumns = brickColumns;
		this.addTotalBricks();
	}

// getter methods for drawing

	getContext() {
		return this.context;
	}

	getPaddle() {
		return this.paddle;
	}

	getBall() {
		return this.ball;
	}

	getBricks() {
		return this.bricks;
	}

// movement methods

	movePaddleRight() {
		this.paddle.moveRight();
	}

	movePaddleLeft() {
		this.paddle.moveLeft();
	}


	moveBall() {
		const { x, y, height } = this.paddle.getPaddleConfig();
		const { radius, location } = this.ball.getDrawingConfig();
		const paddleLocation = {x: x, y: y - radius - height}
		if (this._checkBallOut(location)) {
			this.ball.setBallOnPaddle(paddleLocation);
			this.stopBallMovement();
		}	else if (this._checkBallBounce(location)) {
			this.ball.moveBall(paddleLocation);
		} else {
			this.ball.changeDirection();
			this.ball.moveBall(paddleLocation);
		}
	}

	startBallMovement() {
		this.ball.startMoving();
	}

	stopBallMovement() {
		this.ball.stopMoving();
	}

// constructor methods

	addTotalBricks() {
		let count = 1;
		while (count <= this.brickRows) {
			this._addBrickRow(count);
			count ++;
		}
	}

// private

	_addBrickRow(rowNumber) {
		const brickRow = []
		let count = 1;
		const brickY = 40 * rowNumber;
		let brickX = (canvasWidth / brickColumns) - brickWidth;
		while (count <= this.brickColumns) {
			const color = colorScheme[rowNumber - 1]
			let brick = new Brick(brickX, brickY, color);
			brickRow.push(brick)
			brickX += (brickWidth + 10);
			count ++;
		}
		this.bricks[`${rowNumber}`] = brickRow;
	}

	_checkBallBounce({ xCoordinate, yCoordinate }) {
		return this._withinBoundsX(xCoordinate) && this._withinBoundsY(yCoordinate)
	}

	_checkBallOut({ yCoordinate }) {
		return this._outsideBoundsY(yCoordinate);
	}

	_withinBoundsX(coordinate) {
		return coordinate >= 0 && coordinate <= this.width;
	}

	_withinBoundsY(coordinate) {
		return coordinate >= 0;
	}

	_outsideBoundsY(coordinate) {
		return coordinate >= this.height;
	}
}

const canvas = document.getElementById("breakoutBoard")
const context = canvas.getContext('2d');

const gameBoard = new GameBoard(context);

export default gameBoard;
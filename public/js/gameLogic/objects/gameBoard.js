import Brick from "./brick.js"
import Paddle from "./paddle.js"
import Ball from "./ball.js"
import { brickRows, brickColumns, brickWidth, canvasWidth, colorScheme } from "../../constants/constants.js"

class GameBoard {
	constructor(context) {
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
		console.log('movepaddleright called')
		this.paddle.moveRight();
	}

	movePaddleLeft() {
		console.log('movepaddleleft called')
		this.paddle.moveLeft();
	}


	moveBall() {
		// console.log("ball moved!")
	}

// constructor methods

	addTotalBricks() {
		let count = 1;
		while (count <= this.brickRows) {
			this._addBrickRow(count);
			count ++;
		}
	}

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
}

const canvas = document.getElementById("breakoutBoard")
const context = canvas.getContext('2d');

const gameBoard = new GameBoard(context);

export default gameBoard;
import { initialPaddleX, paddleY, paddleWidth, paddleHeight, canvasWidth } from "../../constants/constants.js"

class Paddle {
	constructor() {
		this.paddleY = paddleY;
		this.paddleX = initialPaddleX;
		this.paddleWidth = paddleWidth;
		this.paddleHeight = paddleHeight;
		this.paddlePositionMax = canvasWidth - (paddleWidth / 2)
		this.paddlePositionMin = paddleWidth / 2
		this.movementRate = 5
	}

	getPaddleDrawingConfig() {
		return {
			paddleX: this.paddleX - (this.paddleWidth / 2),
			paddleY: this.paddleY - this.paddleHeight,
			paddleWidth: this.paddleWidth,
			paddleHeight: this.paddleHeight,
		}
	}

	moveRight() {
		if (this.paddleX + this.movementRate < this.paddlePositionMax) { 
			this.paddleX = this.paddleX + this.movementRate;
		}
	}

	moveLeft() {
		if (this.paddleX - this.movementRate > this.paddlePositionMin) { 
			this.paddleX = this.paddleX - this.movementRate;
		}
	}
}

export default Paddle;
import { initialBallX, canvasWidth, canvasHeight, initialBallY, ballRadius, ballStartingAngle, ballEndingAngle, initialBallDirectionX, initialBallDirectionY } from "../../constants/constants.js"

export default class Ball {
	constructor(){
		this.x = initialBallX;
		this.y = initialBallY;
		this.directionX = initialBallDirectionX;
		this.directionY = initialBallDirectionY;
		this.radius = ballRadius;
		this.startingAngle = ballStartingAngle;
		this.endingAngle = ballEndingAngle;
		this.maximumX = canvasWidth;
		this.maximumY = canvasHeight;
		this.inMotion = false;
	}

	getLocation() {
		return {xCoordinate: this.x, yCoordinate: this.y}
	}

	getDrawingConfig() {
		return {
			location: this.getLocation(),
			radius: this.radius,
			startingAngle: this.startingAngle,
			endingAngle: this.endingAngle
		}
	}

	startMoving(){
		this.inMotion = true;
	}

	stopMoving() {
		this.inMotion = false;
	}

	setBallOnPaddle(currentPaddleLocation){
		this._setInitialValues(currentPaddleLocation)
	}

	moveBall(currentPaddleLocation) {
		if (this.inMotion) {
			const x = this.x + this.directionX;
			const y = this.y + this.directionY;
			this._setLocation({ x, y })
		} else {
			this.setBallOnPaddle(currentPaddleLocation)
		}
	}

	_setInitialValues(location) {
		console.log("set initial values")
		this._setLocation(location);
		this._setInitialDirection();
	}

	_setInitialDirection() {
		this.directionX = initialBallDirectionX;
		this.directionY = initialBallDirectionY;
	}

	_setLocation(location) {
		const { x, y } = location;
		this.x = x;
		this.y = y;
	}

	changeDirection() {
		if (this.x <= 0 || this.x >= this.maximumX) {
			this.directionX = -this.directionX;
		} else if (this.y <= 0) {
			this.directionY = -this.directionY
		}
	}
}
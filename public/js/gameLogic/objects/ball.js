import { initialBallX, initialBallY, ballRadius, ballStartingAngle, ballEndingAngle } from "../../constants/constants.js"

export default class Ball {
	constructor(){
		this.x = initialBallX;
		this.y = initialBallY;
		this.radius = ballRadius;
		this.startingAngle = ballStartingAngle;
		this.endingAngle = ballEndingAngle;
	}

	setPosition(position) {
		const { x, y } = position
		this.x = x;
		this.y = y;
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
}
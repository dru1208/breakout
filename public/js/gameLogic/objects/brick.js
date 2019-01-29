import { brickHeight, brickWidth } from "../../constants/constants.js"

export default class Brick {
	constructor(x, y, color){
		this.x = x;
		this.y = y;
		this.color = color;
		this.height = brickHeight;
		this.width = brickWidth
		this.exists = true;
	}

	getLocation() {
		return {xCoordinate: this.x, yCoordinate: this.y}
	}

	getDrawingConfig() {
		return {
			location: this.getLocation(),
			width: this.width,
			height: this.height,
			color: this.color
		}
	}

	destroyBrick() {
		this.exists = false;
	}
}
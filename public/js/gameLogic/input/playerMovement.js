import { drawPaddle } from "../../gameVisuals/drawVisuals.js"

export const movePaddle = (key, gameBoard) => {
	if (key === "ArrowRight" || key === "d") {
		console.log("right")
		gameBoard.movePaddleRight();
		drawPaddle(gameBoard);
	} else if (key === "ArrowLeft" || key === "a") {
		console.log("left")
		gameBoard.movePaddleLeft();
		drawPaddle(gameBoard);
	}
}
import { drawPaddle, drawBricks, drawBall } from "./drawVisuals.js"

export const generateInitialBoard = gameBoard => {
	drawPaddle(gameBoard);
	gameBoard.addTotalBricks();
	drawBricks(gameBoard);
	drawBall(gameBoard);
}

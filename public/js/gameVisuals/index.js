import { drawPaddle, drawBricks, drawBall } from "./drawVisuals.js"

export const drawBoard = gameBoard => {
	drawPaddle(gameBoard);
	drawBricks(gameBoard);
	drawBall(gameBoard);
}

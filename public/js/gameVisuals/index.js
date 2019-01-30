import { drawPaddle, drawBricks, drawBall, clearBoard } from "./drawVisuals.js"

export const drawBoard = gameBoard => {
  clearBoard(gameBoard)
	drawPaddle(gameBoard);
	drawBricks(gameBoard);
	drawBall(gameBoard);
}

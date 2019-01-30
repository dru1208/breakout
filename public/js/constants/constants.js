export const canvasWidth = 1000;
export const canvasHeight = 680;

export const paddleWidth = 120;
export const paddleHeight = 20;
export const initialPaddleX = canvasWidth / 2;
export const paddleY = canvasHeight - 20; 

export const brickRows = 5;
export const brickColumns = 10;
export const brickHeight = 30;
export const brickWidth = (canvasWidth / brickColumns) - 15
export const brickGap = 3;


export const ballRadius = 15;
export const initialBallX = canvasWidth / 2;
export const initialBallY = paddleY - ballRadius - paddleHeight;

export const initialBallDirectionX = 2
export const initialBallDirectionY = -2

export const ballStartingAngle = 0;
export const ballEndingAngle = Math.PI * 2;


export const movementKeys = {
  "a": "left",
  "ArrowLeft": "left",
  "d": "right",
  "ArrowRight": "right",
  "ArrowUp": "move",
  "w": "move"
}
export const colorScheme = ["red", "blue", "yellow", "green", "orange", "black"]
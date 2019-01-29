import { map, pipe } from "rxjs/operators"
import { deltaTime$ } from "./trigger.js"

export const moveBall$ = deltaTime$.pipe(
  map(({ interval, gameBoard }) => {
    gameBoard.moveBall();
    console.log("move ball", gameBoard)
    return {
      gameBoard
    }
  }))
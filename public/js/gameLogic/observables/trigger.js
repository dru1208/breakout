import { movementStart$, movementStop$ } from "./playerMovement.js"
import { merge, interval } from "rxjs"
import { pipe, map } from "rxjs/operators"
import gameBoard from "../objects/gameBoard.js"

export const movement$ = merge(movementStart$, movementStop$);

export const deltaTime$ = interval(10)
  .pipe(map(interval => ({
    type: "deltaTime",
    interval,
    gameBoard
  })))

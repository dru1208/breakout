import { movement$, deltaTime$ } from "./trigger.js"
import { combineLatest } from "rxjs"
import { pipe, map, filter } from "rxjs/operators"
import gameBoard from "../objects/gameBoard.js"

export const setDirection$ = movement$
  .pipe(
    map(({ direction, action }) => {
      return {type: "direction", direction}
    }))

export const movePaddle$ = combineLatest(deltaTime$, setDirection$)
  .pipe(
    map(trigger => {
      return {
        deltaTime: trigger[0],
        setDirection: trigger[1]
      }
    }),
    map(({ setDirection, deltaTime }) => {
      if (setDirection.direction === "right") {
        gameBoard.movePaddleRight()
      } else if (setDirection.direction === "left") {
        gameBoard.movePaddleLeft()
      }
      return { type: "render", gameBoard }
    }))
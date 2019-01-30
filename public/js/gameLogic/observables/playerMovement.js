import { fromEvent } from "rxjs";
import { pipe, filter, map, take } from "rxjs/operators";
import { movementKeys } from "../../constants/constants.js"
import gameBoard from "../objects/gameBoard.js"

let shouldFire = true
const findMovementDirection = key => movementKeys[key]

const onKeyDown = fromEvent(document, "keydown");

export const movementStart$ = onKeyDown
  .pipe(
    filter(e => shouldFire ? e : undefined),
    filter(e => findMovementDirection(e.key)),
    map(e => {
      shouldFire = false
      if (movementKeys[e.key] === "move") {
        gameBoard.startBallMovement()
      }
      return {type: "movement", direction: movementKeys[e.key] }
    }))

const onKeyUp = fromEvent(document, "keyup");

export const movementStop$ = onKeyUp
  .pipe(
    filter(e => findMovementDirection(e.key)),
    map(e => {
      shouldFire = true
      return {type: "movement", direction: "none" }
    }))

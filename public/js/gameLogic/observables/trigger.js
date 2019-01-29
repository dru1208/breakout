import { movementStart$, movementStop$ } from "./playerMovement.js"
import { merge, interval } from "rxjs"
import { pipe, map } from "rxjs/operators"

export const movement$ = merge(movementStart$, movementStop$);

export const deltaTime$ = interval(100)
  .pipe(map(interval => ({
    type: "deltaTime",
    interval
  })))

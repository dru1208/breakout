import { pipe, withLatestFrom } from "rxjs/operators" 
import { movePaddle$ } from "./paddleMovement.js"
import { deltaTime$ } from "./trigger.js"

export const drawBoard$ = deltaTime$.pipe(withLatestFrom(movePaddle$))
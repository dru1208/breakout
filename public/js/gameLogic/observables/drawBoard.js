import { merge } from "rxjs"
import { map, pipe, withLatestFrom } from "rxjs/operators" 
import { movePaddle$ } from "./paddleMovement.js"
import { moveBall$ } from "./ballMovement.js"
import { deltaTime$ } from "./trigger.js"
import { drawBoard } from "../../gameVisuals/index.js"

export const drawBoard$ = merge(deltaTime$, moveBall$, movePaddle$)

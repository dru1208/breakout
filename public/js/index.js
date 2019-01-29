import "../styles/styles.css"
import gameBoard from "./gameLogic/objects/gameBoard.js"
import { drawBoard } from "./gameVisuals/index.js"
import { trigger$ } from "./gameLogic/observables/trigger.js"
import { drawBoard$ } from "./gameLogic/observables/drawBoard.js"
import { setDirection$, movePaddle$ } from "./gameLogic/observables/paddleMovement.js"

drawBoard$.subscribe(({ gameBoard }) => drawBoard(gameBoard))

if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}

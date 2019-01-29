import "../styles/styles.css"
import gameBoard from "./gameLogic/objects/gameBoard.js"

import { trigger$ } from "./gameLogic/observables/trigger.js"
import { drawBoard$ } from "./gameLogic/observables/drawBoard.js"
import { setDirection$, movePaddle$ } from "./gameLogic/observables/paddleMovement.js"



// trigger$.subscribe(x => console.log(x)) 
// setDirection$.subscribe(x => console.log(x))
drawBoard$.subscribe(text => console.log(text))




if(typeof(module.hot) !== 'undefined') {
  module.hot.accept() // eslint-disable-line no-undef  
}



// import { interval, merge } from "rxjs"
// import { pipe, take, subscribe } from "rxjs/operators"

// const timer1 = interval(1000).pipe(take(10));
// const timer2 = interval(2000).pipe(take(6));
// const timer3 = interval(500).pipe(take(10));
// const concurrent = 2; // the argument
// const merged = merge(timer1, timer2, timer3, concurrent);
// merged.subscribe(x => console.log(x));
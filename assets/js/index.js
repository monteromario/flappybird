const game = new Game('canvas-game')

window.addEventListener('load', () => {
  // iteration - 1: create & start the game
  game.start()
  
  // iteration - 2: add key listeners to the game
  document.addEventListener('keydown', (event) => {
    game.onKeyEvent(event)
  })

  document.addEventListener('keyup', (event) => {
    game.onKeyEvent(event)
  })
});

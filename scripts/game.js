
let game = new TwentyFortyEightGame(640,640)
game.generateNewTile()
game.initEventListeners()

/*game.inputHandler = (e) => {
    console.log('key press')
    if(e.key === 'ArrowUp'){
        console.log('poggers!')
        //this.move('up')
    }
}*/

//document.addEventListener('keydown',game.inputHandler)

//TODO add colored tiles
//TODO add EndGame
//TODO no valid move = no generated tile

//----------------- NOT IMPORTANT -------------------

//TODO center board
//TODO start and end screens
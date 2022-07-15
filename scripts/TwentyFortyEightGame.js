class TwentyFortyEightGame extends metraGame {
    constructor(width,height) {
        super(width,height);
        this.tileSize = 160;
        this.tileColors = [,'#b6994c','#d88821','#F47F41','#F18149','#D6441D']
        this.tiles = []
        this.eventHandler = this.eventHandler.bind(this)
        //this.initEventListeners()
    }

    isInbounds(pos){
        //console.log('out of bounds check ' + pos.x + ' --- ' + pos.y)
        if(pos.x < 0 || pos.x > 3){return false}
        if(pos.y < 0 || pos.y > 3){return false}

        //console.log('out of bounds')
        return true
    }

    //returns false if no tile
    getTileAt(pos) {
        let len = this.tiles.length;
        //console.log(pos)
        for(let i = 0; i < len; i++){
            if(this.tiles[i].pos.x === pos.x && this.tiles[i].pos.y === pos.y){
                //console.log('COLLISION')
                //console.log(i)
                return i
            }
        }
        return false
    }

    //if no valid move - do not generate new tile
    move(dir) {
        switch(dir){
            case 'up':
                //iter
                for(let col = 0; col < 4; col++) {
                    //get all tiles in the same (X) column
                    let colArr = this.tiles.filter((tile)=>{return tile.pos.x === col})
                    //sort them by Y position
                    colArr.sort((a,b)=>{return a.pos.y - b.pos.y})
                    //combos and deletions
                    for(let i = 0; i<colArr.length-1; i++){
                        if(colArr[i].num === colArr[i+1].num){
                            //delete first block
                            this.tiles.splice(this.getTileAt(colArr[i].pos),1)
                            colArr.splice(i,1)

                            //adjust second block
                            //i++
                            colArr[i].num++
                        }
                    }
                    //new positions for remaining tiles in column by index in columnArr
                    colArr.forEach((newTile,index)=>{
                        this.tiles[this.getTileAt(newTile.pos)].pos.y = index
                        this.tiles[this.getTileAt(newTile.pos)].color = this.tileColors[this.tiles[this.getTileAt(newTile.pos)].num]
                    })
                }
                this.generateNewTile()
                break;
            case 'down':
                //iter
                for(let col = 0; col < 4; col++) {
                    //get all tiles in the same (X) column
                    let colArr = this.tiles.filter((tile)=>{return tile.pos.x === col})
                    //sort them by Y position
                    colArr.sort((a,b)=>{return b.pos.y - a.pos.y})
                    //combos and deletions
                    for(let i = 0; i<colArr.length-1; i++){
                        if(colArr[i].num === colArr[i+1].num){
                            //delete first block
                            this.tiles.splice(this.getTileAt(colArr[i].pos),1)
                            colArr.splice(i,1)

                            //adjust second block
                            //i++
                            colArr[i].num++
                        }
                    }
                    //new positions for remaining tiles in column by index in columnArr
                    colArr.forEach((newTile,index)=>{
                        this.tiles[this.getTileAt(newTile.pos)].pos.y = 3-index
                        this.tiles[this.getTileAt(newTile.pos)].color = this.tileColors[this.tiles[this.getTileAt(newTile.pos)].num]
                    })
                }
                this.generateNewTile()
                break;
            case 'left':
                //iter
                for(let row = 0; row < 4; row++) {
                    //get all tiles in the same (X) column
                    let rowArr = this.tiles.filter((tile)=>{return tile.pos.y === row})
                    //sort them by Y position
                    rowArr.sort((a,b)=>{return a.pos.x - b.pos.x})
                    //combos and deletions
                    for(let i = 0; i<rowArr.length-1; i++){
                        if(rowArr[i].num === rowArr[i+1].num){
                            //delete first block
                            this.tiles.splice(this.getTileAt(rowArr[i].pos),1)
                            rowArr.splice(i,1)

                            //adjust second block
                            //i++
                            rowArr[i].num++
                        }
                    }
                    //new positions for remaining tiles in column by index in columnArr
                    rowArr.forEach((newTile,index)=>{
                        this.tiles[this.getTileAt(newTile.pos)].pos.x = index
                        this.tiles[this.getTileAt(newTile.pos)].color = this.tileColors[this.tiles[this.getTileAt(newTile.pos)].num]
                    })
                }
                this.generateNewTile()
                break;
            case 'right':
                //iter
                for(let row = 0; row < 4; row++) {
                    //get all tiles in the same (X) column
                    let rowArr = this.tiles.filter((tile)=>{return tile.pos.y === row})
                    //sort them by Y position
                    rowArr.sort((a,b)=>{return b.pos.x - a.pos.x})
                    //combos and deletions
                    for(let i = 0; i<rowArr.length-1; i++){
                        if(rowArr[i].num === rowArr[i+1].num){
                            //delete first block
                            this.tiles.splice(this.getTileAt(rowArr[i].pos),1)
                            rowArr.splice(i,1)

                            //adjust second block
                            //i++
                            rowArr[i].num++
                        }
                    }
                    //new positions for remaining tiles in column by index in columnArr
                    rowArr.forEach((newTile,index)=>{
                        this.tiles[this.getTileAt(newTile.pos)].pos.x = 3-index
                        this.tiles[this.getTileAt(newTile.pos)].color = this.tileColors[this.tiles[this.getTileAt(newTile.pos)].num]
                    })
                }
                this.generateNewTile()
                break;
            default:
                console.log('invalid dir')
                break;
        }
    }

    //generates a new tile at an untaken spot
    generateNewTile = () => {
        if(this.tiles.length === 16){return}
        let avaPos = []

        //get all positions
        for(let tempX = 0; tempX < 4; tempX++){
            for(let tempY = 0; tempY < 4; tempY++){
                let tempPos = {x:tempX,y:tempY}
                if(this.getTileAt(tempPos) === false) {
                    avaPos.push(tempPos)
                }
            }
        }
        console.log(avaPos.length)

        //pick a random available position
        let newPos = avaPos[Math.floor(Math.random()*avaPos.length)]
        //add tile to this.tiles
        this.tiles.push(new numberTile(newPos.x,newPos.y,1,this.tileSize))
    };

    //fills the board with tiles -- debug --
    fillTiles(){
        for(let i = 0; i<4; i++){
            for(let j = 0; j<4; j++){
                this.tiles.push(new numberTile(i,j,1))
            }
        }
    }

    loop = () => {
        this.cvs.clear()
        this.draw()
    };

    draw = () => {
        let len = this.tiles.length;
        for(let i = 0; i<len; i++){
            this.tiles[i].draw()
        }
    };

    //--------- inputs --------------

    initEventListeners(){
        document.addEventListener('keydown',this.eventHandler)
    }

    eventHandler(e){
        switch(e.key){
            case 'ArrowUp':
                this.move('up')
                break;
            case 'ArrowDown':
                this.move('down')
                break;
            case 'ArrowLeft':
                this.move('left')
                break;
            case 'ArrowRight':
                this.move('right')
                break;
            case 'o' || 'O':
                this.generateNewTile()
                break;
            default:
                console.log('whoops')
                break;

        }
    }


}

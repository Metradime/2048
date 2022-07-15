class numberTile extends gameEntity{
    constructor(x,y,num,tileSize) {
        super(x,y,tileSize,tileSize,'#b6994c');
        this.textColor = 'black';
        this.num = num || 0
        this.tileSize = tileSize
    }

    getNextPosition = {
        up: () => {
            let newX = this.pos.x;
            let newY = this.pos.y - 1;
            return {
                x: newX,
                y: newY
            }
        },
        down: () => {
            let newX = this.pos.x;
            let newY = this.pos.y + 1;
            return {
                x: newX,
                y: newY
            }
        },
        left: () => {
            let newX = this.pos.x - 1;
            let newY = this.pos.y;
            return {
                x: newX,
                y: newY
            }
        },
        right: () => {
            let newX = this.pos.x + 1;
            let newY = this.pos.y;
            return {
                x: newX,
                y: newY
            }
        }
    };

    setPosition(pos){
        this.pos.x = pos.x;
        this.pos.y = pos.y
    }

    draw(){
        //console.log('draw called')
        // console.log(cx)
        let boxOffSet = this.tileSize/8

        let drawX = this.pos.x*this.tileSize
        let drawY = this.pos.y*this.tileSize

        game.cvs.drawBox(drawX + boxOffSet/2,drawY + boxOffSet/2,this.tileSize*0.9,this.tileSize*0.9,'black')
        game.cvs.drawBox(drawX + boxOffSet,drawY + boxOffSet,this.tileSize*0.75,this.tileSize*0.75,this.color);

        game.cvs.ctx.textAlign = 'center';
        game.cvs.ctx.font = '64pt arial';
        game.cvs.ctx.fillStyle = this.textColor;
        game.cvs.ctx.fillText((2**this.num).toString(),drawX+this.tileSize/2,drawY+5*this.tileSize/7)
    }
}
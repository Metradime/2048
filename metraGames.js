class gameCanvas {
    constructor(width,height) {
        this.width = width;
        this.height = height;

        this.border = '10px solid black';

        this.HTMLObject = this.createHTMLElement();

        this.cvs = this.HTMLObject.canvas;
        this.ctx = this.HTMLObject.context;
        this.cvs.style.border = this.border;
        this.cvs.style.backgroundColor = 'black';

        this.mount(document.body);
    }

    createHTMLElement(){
        let cvs = document.createElement('canvas');

        cvs.width = this.width;
        cvs.height = this.height;

        cvs.style.backgroundColor = 'black';

        let ctx = cvs.getContext('2d');

        return {canvas: cvs, context: ctx}
    }


    clear(){
        this.ctx.fillStyle = 'beige';
        this.ctx.fillRect(0,0,this.width,this.height)
    }
    drawBox(x,y,width,height,color){
        this.ctx.fillStyle = color
        this.ctx.fillRect(x,y,width,height)
    }
    test(){return 'test'}
    drawNum(num, x, y){
        this.ctx.fillStyle = 'green';
        this.ctx.fillText(num.toString(),x,y,40)
        return 'test'
    }

    mount(destination){
        destination.appendChild(this.cvs)
    }
}

class gameEntity {
    constructor(x,y,width,height,color) {
        this.pos = {
            x:x,
            y:y
        };
        this.width = width;
        this.height = height;
        this.color = color
    }

    vel = {
        x:0,
        y:0
    };

    addComponent(component){

    }
}

class metraGame {
    constructor(width,height) {
        this.cvs = this.initCanvas(width,height)
        this.entities = [];
        let frameDraw = () => {this.loop()};
        setInterval(frameDraw, 1000/60)
    }

    loop() {
        //console.log('rip')
        //this.cvs.clear();
        //this.updateEntities();
        //this.drawEntities();
    }

    addEntity(entity){
        this.entities.push(entity)
    }
    drawEntities(){
        this.entities.forEach((ent) => {
           ent.draw(this.cvs.ctx)
        })
    }
    updateEntities(){
        this.entities.forEach((ent)=>{
            if(ent.vel){
                //console.log('ent drawn at ' + ent.pos.x + ' , ' + ent.pos.y)
                ent.pos.x += ent.vel.x;
                ent.pos.y += ent.vel.y
            }
        })
    }

    //-------------------

    initCanvas(width,height){
        console.log(this.cvs)
        if(!this.cvs){
            return new gameCanvas(width,height)
        }
    }
}
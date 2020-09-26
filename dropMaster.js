class dropMaster{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("garbagecan.png");
        World.add(world,this.body);
    }
    display(){
       var p = this.body.position
       //var a = this.body.angle
       //push()
       rectMode(CENTER)
       //translate(p.x,p.y)
       //rotate(a)
       strokeWeight(4)
       stroke("white")
       fill("white");
       rect(p.x,p.y,this.width,this.height)
       imageMode(CENTER)
       image(this.image,615,610,150,150)
       //pop()
    }
}
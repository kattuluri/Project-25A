class paper{
    constructor(x,y){
        var options = {
          isStatic:false,
          restitution : 0.3,
          friction : 0.2,
          density : 1.2
        }
        this.radius = 70;
        this.body = Bodies.circle(x,y,(this.radius-30)/2,options);
        this.image = loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
    var p = this.body.position
    push()
    translate(p.x,p.y)
    imageMode(CENTER)
    strokeWeight(4)
    stroke("green")
    fill(255);
    push()
    image(this.image,0,0,this.radius,this.radius)
    pop()
   }
}

class Ground
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic :true
          }
          this.ground = Bodies.rectangle(x,y,width,height,options);
          World.add(world,this.ground);
    }
    display()
{
    var ground=this.ground.position;
    push();
    translate(ground.x,ground.y);
    rectMode(CENTER);
    rect(0,0,2750,20);
    pop();
}

}
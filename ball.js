class Ball
{
    constructor(x,y,radius)
    {
        var options ={
            restitution : 0.04
        }
        this.radius=radius;
        this.ball=Bodies.circle(x,y,radius,options);
        World.add(world,this.ball);
    }
    display()
    {
        var pos= this.ball.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius);
    }
}
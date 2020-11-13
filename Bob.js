class Bob{
    constructor(a, b){
        var Ball_properties = {
            isStatic: false,
            friction: 0,
            restitution: 1,
            density: 0.8,
            mass:1000
            
        }
        this.bodies = Bodies.circle(a, b, 20, Ball_properties)
        this.radius = 20;
        World.add(world, this.bodies)
        console.log(this.bodies.mass)
    }
    display(){
    ellipseMode(RADIUS)
    fill("purple") 
    ellipse(this.bodies.position.x, this.bodies.position.y, this.radius)
    }
}
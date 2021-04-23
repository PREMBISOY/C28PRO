class Mango{
    constructor(x,y,radius) {
     
      var options = {
          isStatic: true,
          restitution:0.2,
          friction:1
          
      }
      
 
      this.body =Bodies.circle(x,y,radius,options);
      this.radius=radius
      this.image = loadImage("sprites/mangoi.png");
      World.add(world, this.body);
      
    }
    display(){
    
        var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,50,50);
        

    }
  };
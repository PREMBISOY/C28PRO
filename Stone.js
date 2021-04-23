class Stone{
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          restitution:0,
          friction:1,
          density:1.2
          

      }
      this.body =Bodies.circle(x,y,radius,options);
      this.radius=radius
      this.image = loadImage("sprites/stonei.png");
      World.add(world,this.body);

      //rope =  new SlingShot(this.body,{x: 200, y:550});
    }
    display(){
      
      var pos = this.body.position;
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.radius,this.radius);
        imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,60,65);


    
    
    }
  };
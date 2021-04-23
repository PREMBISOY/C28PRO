class Tree{
constructor(x,y,width,height){
   
    this.tree = loadImage("sprites/treei.png");
    // World.add(world,this.tree);
}
display(){
    image(this.tree,600,400,400,700);
    //var pos = this.body.position;
    //var angle = this.body.angle;
        //push();
        //translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
         
        // imageMode(CENTER);
        // image(this.image, 0, 0, this.width, this.height);
        //pop();
}

}


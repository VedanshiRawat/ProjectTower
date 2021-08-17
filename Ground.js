class Ground{
    constructor(){
        var options={
            isStatic : true
          }
    
    this.body = Bodies.rectangle(450,390,900,20,ground_options)
    this.width = width;
    this.height = height;
    World.add(world,this.body);
    }
    display(){
       var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y,this.width,this.height);
    }
}
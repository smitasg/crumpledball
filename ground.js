class Ground{
    constructor(x,y,width,height){
    
     var options={
    'restitution':0.8,
    'friction':0.3,
    'density':1.0,
  isStatic:true
    }
    
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    World.add(world,this.body)
    
    
    
    
    
    }
    display(){
    var pus =this.body.position;
    push();
    translate(pus.x,pus.y)
    rectMode(CENTER)
    strokeWeight(4);
    fill(255,242,0)
    rect(0,0,this.width,this.height);
    pop();
    }
}
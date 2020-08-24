class Dustbin {
    constructor(x,y, width, height ,angle){
     var options ={
        isStatic: true 
         }
         
    this.rect1 = Bodies.rectangle(x,y,width,height,options);
    this.width =width ;
    this.height = height;
    World.add(world, this.rect1);
    
    this.rect2 = Bodies.rectangle(x,y,width,height,options);
    this.width = width ;
    this.height = height;
    World.add(world, this.rect2);

    this.rect3 = Bodies.rectangle(x,y,width,height,options);
    this.width =width ;
    this.height = height;
    World.add(world, this.rect3);
        }
    display(){
    
    var pos = this.rect1.position ;
    var angle = this.rect1.angle
    push();
    translate(pos.x , pos.y);
    rotate(angle)
    rectMode(CENTER);
    
    fill("white");
    rect(0,0,this.width, this.height);
    pop();
   
    var pos = this.rect2.position ;
    var angle = this.rect2.angle
    push();
    translate(pos.x , pos.y);
    rotate(angle)
    rectMode(CENTER);
    
    fill("white");
    rect(0,0,this.width, this.height);
    pop();

    var pos = this.rect3.position ;
    var angle = this.rect3.angle
    push();
    translate(pos.x , pos.y);
    rotate(angle)
    rectMode(CENTER);
    
    fill("white");
    rect(0,0,this.width, this.height);
    pop();
        }
    };
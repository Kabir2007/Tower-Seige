class Tower{

constructor(x,y){

this.body = Bodies.rectangle(x,y,40,40);
World.add(world,this.body);

}

display(){

var angle = this.body.angle

push();
translate(this.body.position.x, this.body.position.y);
rotate(angle);
rectMode(CENTER);
fill("blue");
rect(0,0,40,40);
pop();

}

}
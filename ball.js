class Car {
    x;
    y;
    radius;
    color;
    context;
    canvas;
    flag;
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.canvas = document.getElementById("myCanvas");
        this.context = this.canvas.getContext("2d");
        this.flag = 'up';
    }
    draw() {
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        this.context.fillStyle = this.color;
        this.context.fill();
        this.context.closePath();
    }
    move(){
        this.clear();
        if(this.y>=this.canvas.height-this.radius){this.flag = "down"
        this.moveDown()}
        else if(this.y<=this.radius){this.flag = "up"
        this.moveUp()}}
        if(this.y<=this.radius){this.flag = "down"
        this.moveDown()}
        else if(this.y>=this.canvas.height-this.radius){this.flag = "up"
        this.moveUp()}}

    moveUp(){
        this.y-=50
}
    moveDown(){
    this.y += 50
}
    clear(){
        this.context.clearRect(0,0,this.canvas.width,this.canvas.height)
    }
}
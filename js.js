function Circle(x, y, radius){
    this.x = x;
    this.y = y;
    this.radius = radius;
}

function getRandomHex(){
    return Math.floor(Math.random()*255);
}

function getRandomColor(){
    var red = getRandomHex();
    var green = getRandomHex();
    var blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green +")";
}

function createCircle(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    var radius = Math.floor(Math.random() * 80);
    var color = getRandomColor();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var circle= new Circle(x, y, radius);
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
}


let interval = setInterval(createCircle,2000);
createCircle();
createCircle();


// function Circle(x,y,radius) {
//     this.x = x;
//     this.y = y;
//     this.radius = radius;
// }
//
// function creatCircle() {
//     let ctx = document.getElementById("myCanvas").getContext("2d");
//     let circle = new Circle(500,500,80);
//     ctx.beginPath();
//     ctx.arc(circle.x, circle.y, circle.radius, 0, 2*Math.PI);
//     ctx.fill();
// }
//
// creatCircle();
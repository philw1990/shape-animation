var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

/*var random = function(){

   c.clearRect(0, 0, canvas.width, canvas.height);

for(var i = 0; i < 10; i++){
    
    c.beginPath();
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    var w = Math.random() * 300;
    var h = Math.random() * 300;
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
c.fillStyle = "#"+randomColor;
c.fillRect(x,y,w,h);
}
}*/

var x = 200;
var y = 200;
var dx = 28;
var dy = 28;

//for(var i = 0; i < 10; i++){

function randomColor() {
    return Math.floor(Math.random()*16777215).toString(16);
}

function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    c.fillStyle = "#"+randomColor;
    c.fillRect(x,y,100,100);
    x += dx;
    y += dy;
    if (x > innerWidth || x < 0) {
        dx = -dx;
    }
    if (y > innerHeight || y < 0) {
        dy = -dy;
    }

}

animate();



var canvas = document.getElementById("myCanvas");
var context = canvas.getContext('2d');

context.beginPath();
context.rect(50, 50, 200, 200);
context.fillStyle = 'yellow';
context.fill();
context.lineWidth = 7;
context.strokeStyle= 'black';
context.stroke();

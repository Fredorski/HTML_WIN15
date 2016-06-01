$(document).ready(function () {
    //console.log("ready!");
    ////alert('hej');
    //draw();
    //drawSomething();
    //drawLineWidth();
    //drawText();
    drawLineJoin();
});

function draw() {
    var canvas = document.getElementById('myform');
    var ctx = canvas.getContext('2d');
    ctx.fillRect(10, 20, 30, 200);    
}
function drawSomething() {
    var canvas = document.getElementById("myform"),
        ctx = canvas.getContext("2d"),
        offset = 15,
        clearOffset = 30,
        pushDownOffset = 10,
        height = 50,
        width = 100,
        count = 5;

    for (var i = 0; i < count; i++) {
        ctx.fillRect(i * (offset + width) + offset, offset, width, height);
        ctx.clearRect(i * (offset + width) + (clearOffset / 2) + offset, offset + (clearOffset / 2) + pushDownOffset, width - clearOffset, height - clearOffset);
        ctx.strokeRect(i * (offset + width) + offset, (2 * offset) + height, width, height);
    }
}
function drawLineWidth() {
    var canvas = document.getElementById('myform'),
        ctx = canvas.getContext('2d'),
        offset = 40,
        width = 5,
        height = 5,
        lineWidth = 1,
        i = 0,
        centerX = canvas.width / 2,
        centerY = canvas.height / 2;
    ctx.strokeStyle = "red";
    for (var i = 1; i < 15; i++) {
        ctx.lineWidth = i;
        ctx.strokeRect(centerX - (width / 2) - (i * offset / 2),
            centerY - (height / 2) - (i * offset / 2),
            width + (i * offset),
            height + (i * offset)
        );
    }
}
function drawText() {
    var canvas = document.getElementById('myform'),
        ctx = canvas.getContext('2d');

    ctx.strokeStyle = "purple";
    ctx.fillStyle = "green";
    ctx.lineWidth = 2;
    ctx.font = "bold 100pt TimesNewRoman";

    ctx.beginPath();
    ctx.moveTo(100, 300);
    ctx.lineTo(550, 300);
    ctx.stroke();

    ctx.strokeStyle = "blue";
    ctx.fillText("Freddie", 100, 300);
    ctx.strokeText("Kajsa", 100, 300);
}
function drawLineJoin() {
    var canvas = document.getElementById("myform"),
        ctx = canvas.getContext("2d");
    ctx.lineWidth = 20;

    ctx.lineJoin = 'round';
    ctx.strokeRect(20, 20, 50, 50);

    ctx.lineJoin = 'bevel';
    ctx.strokeRect(100, 100, 50, 50);

    ctx.lineJoin = 'miter';
    ctx.strokeRect(180, 180, 50, 50);
}

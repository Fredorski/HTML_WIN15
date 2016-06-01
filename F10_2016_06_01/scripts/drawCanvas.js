$(document).ready(function () {
    //console.log("ready!");
    ////alert('hej');
    draw();
});

function draw() {
    var canvas = document.getElementById('myform');
    var ctx = canvas.getContext('2d');
    ctx.fillRect(10, 20, 30, 200);
    //samma kod med jQuery:
    var jCanvas = $('myform');

}
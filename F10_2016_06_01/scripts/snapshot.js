$(document).ready(function () {
    $('#buttonSnapShot').on('click', snap);
});

function snap() {
    var canvas = document.getElementById('myCanvas');
    var videon = document.getElementById('myVideo');
    canvas.getContext('2d').drawImage(videon, 0,0,400,320);
}
//Temporary. Just a static animation to show that the viewport works.

var c = document.getElementById("mapwindow");
var ctx = c.getContext("2d");
var counter = 0;
var space = new Image();
space.src = '/space.png';
var clown = new Image();
clown.src = '/clown.gif';

function animate(){
	c.height = c.clientHeight;
	c.width = c.height;
	ctx.save();
	ctx.drawImage(space, 0, 0, c.width, c.height);
	ctx.translate((c.width / 2 + ++counter) % (c.width + 200) - 100, c.height / 2);
	ctx.rotate(counter / 100);
	ctx.drawImage(clown, -50, -50, 100, 100);
	ctx.restore();

	window.requestAnimationFrame(animate);
}

window.onload = function(){
	animate();
}

var exampleSocket = new WebSocket("ws://localhost:8080");
exampleSocket.onopen = (event) => {
	exampleSocket.send("Test 01");
}
exampleSocket.onmessage = function (event) {
  console.log(event.data);
}
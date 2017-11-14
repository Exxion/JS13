(function () {
'use strict';

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
};

var exampleSocket = new WebSocket("ws://localhost:8080");
exampleSocket.onopen = (event) => {
	exampleSocket.send("Test 01");
};
exampleSocket.onmessage = function (event) {
  console.log(event.data);
};

}());
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlcyI6WyIuLi8uLi9hcHAvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL1RlbXBvcmFyeS4gSnVzdCBhIHN0YXRpYyBhbmltYXRpb24gdG8gc2hvdyB0aGF0IHRoZSB2aWV3cG9ydCB3b3Jrcy5cblxudmFyIGMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1hcHdpbmRvd1wiKTtcbnZhciBjdHggPSBjLmdldENvbnRleHQoXCIyZFwiKTtcbnZhciBjb3VudGVyID0gMDtcbnZhciBzcGFjZSA9IG5ldyBJbWFnZSgpO1xuc3BhY2Uuc3JjID0gJy9zcGFjZS5wbmcnO1xudmFyIGNsb3duID0gbmV3IEltYWdlKCk7XG5jbG93bi5zcmMgPSAnL2Nsb3duLmdpZic7XG5cbmZ1bmN0aW9uIGFuaW1hdGUoKXtcblx0Yy5oZWlnaHQgPSBjLmNsaWVudEhlaWdodDtcblx0Yy53aWR0aCA9IGMuaGVpZ2h0O1xuXHRjdHguc2F2ZSgpO1xuXHRjdHguZHJhd0ltYWdlKHNwYWNlLCAwLCAwLCBjLndpZHRoLCBjLmhlaWdodCk7XG5cdGN0eC50cmFuc2xhdGUoKGMud2lkdGggLyAyICsgKytjb3VudGVyKSAlIChjLndpZHRoICsgMjAwKSAtIDEwMCwgYy5oZWlnaHQgLyAyKTtcblx0Y3R4LnJvdGF0ZShjb3VudGVyIC8gMTAwKTtcblx0Y3R4LmRyYXdJbWFnZShjbG93biwgLTUwLCAtNTAsIDEwMCwgMTAwKTtcblx0Y3R4LnJlc3RvcmUoKTtcblxuXHR3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKXtcblx0YW5pbWF0ZSgpO1xufVxuXG52YXIgZXhhbXBsZVNvY2tldCA9IG5ldyBXZWJTb2NrZXQoXCJ3czovL2xvY2FsaG9zdDo4MDgwXCIpO1xuZXhhbXBsZVNvY2tldC5vbm9wZW4gPSAoZXZlbnQpID0+IHtcblx0ZXhhbXBsZVNvY2tldC5zZW5kKFwiVGVzdCAwMVwiKTtcbn1cbmV4YW1wbGVTb2NrZXQub25tZXNzYWdlID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKGV2ZW50LmRhdGEpO1xufSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7QUFFQSxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO0FBQ2hCLElBQUksS0FBSyxHQUFHLElBQUksS0FBSyxFQUFFLENBQUM7QUFDeEIsS0FBSyxDQUFDLEdBQUcsR0FBRyxZQUFZLENBQUM7QUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztBQUN4QixLQUFLLENBQUMsR0FBRyxHQUFHLFlBQVksQ0FBQzs7QUFFekIsU0FBUyxPQUFPLEVBQUU7Q0FDakIsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsWUFBWSxDQUFDO0NBQzFCLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQztDQUNuQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7Q0FDWCxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzlDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsR0FBRyxFQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO0NBQy9FLEdBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0NBQzFCLEdBQUcsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztDQUN6QyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUM7O0NBRWQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0NBQ3RDOztBQUVELE1BQU0sQ0FBQyxNQUFNLEdBQUcsVUFBVTtDQUN6QixPQUFPLEVBQUUsQ0FBQztFQUNWOztBQUVELElBQUksYUFBYSxHQUFHLElBQUksU0FBUyxDQUFDLHFCQUFxQixDQUFDLENBQUM7QUFDekQsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDLEtBQUssS0FBSztDQUNqQyxhQUFhLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0VBQzlCO0FBQ0QsYUFBYSxDQUFDLFNBQVMsR0FBRyxVQUFVLEtBQUssRUFBRTtFQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzs7Ozs7In0=

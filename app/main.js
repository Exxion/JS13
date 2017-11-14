//Still temporary, but closer to done. Now includes input testing!

class RenderObject{
	constructor(img){
		if(typeof img == "string"){
			var img_ = new Image();
			img_.src = img;
			this.img = img_;
		}
		else{
			this.img = img;
		}
	}

	pre_draw(ctx_){}

	_draw(ctx_){
		ctx_.drawImage(this.img, 0, 0);
	}

	post_draw(ctx_){}

	draw(ctx_){
		this.pre_draw(ctx_);
		this._draw(ctx_);
		this.post_draw(ctx_);
	}
}

class Background extends RenderObject{
	_draw(ctx_){
		ctx_.drawImage(this.img, 0, 0, ctx_.canvas.width, ctx_.canvas.height);
	}
}

class Movable extends RenderObject{
	constructor(img, x, y, width, height, rot){
		super(img);
		this.x = x || 0;
		this.y = y || 0;
		this.width = width || this.img.width;
		this.height = height || this.img.height;
		this.rot = rot || 0;
	}

	pre_draw(ctx_){
		ctx_.save();
		ctx_.translate(this.x, this.y);
		ctx_.rotate(this.rot);
	}

	_draw(ctx_){
		ctx_.drawImage(this.img, -(this.width / 2), -(this.height / 2), this.width, this.height);
	}

	post_draw(ctx_){
		ctx_.restore();
	}
}

class LocalPhys extends Movable{
	constructor(img, x, y, width, height, rot, vx, vy, va){
		super(img, x, y, width, height, rot);
		this.vx = vx || 0;
		this.vy = vy || 0;
		this.va = va || 0;
		this.last_move = new Date();
	}

	move(delta){
		if(delta === undefined){
			delta = new Date() - this.last_move;
		}
		this.x += this.vx * delta;
		this.y += this.vy * delta;
		this.rot += this.va * delta;

		this.x = ((this.x + 528) % 512) - 16; //TODO: Remove hardcoding
		this.y = ((this.y + 528) % 512) - 16; //TODO: Remove hardcoding

		this.last_move = new Date();
	}

	pre_draw(ctx_){
		this.move();
		super.pre_draw(ctx_);
	}
}

var c = document.getElementById("mapwindow");
var ctx = c.getContext("2d");

ctx.imageSmoothingEnabled = false;

var RenderObjects = [];
RenderObjects[0] = new Background("/space.png");
RenderObjects[1] = new LocalPhys("/clown.gif", 240, 240, 32, 32, 0, 0.05, 0, 0.001);

function animate(){
	c.height = 480;
	c.width = c.height;

	RenderObjects.forEach(function(el){
		el.draw(ctx);
	})

	window.requestAnimationFrame(animate);
}

window.onload = function(){
	animate();

	document.addEventListener("keypress", function(e){
		switch(e.key){
			case "w":
				RenderObjects[1].vy -= .01;
				break;
			case "a":
				RenderObjects[1].vx -= .01;
				break;
			case "s":
				RenderObjects[1].vy += .01;
				break;
			case "d":
				RenderObjects[1].vx += .01;
				break;
			case "q":
				RenderObjects[1].va -= .0002;
				break;
			case "e":
				RenderObjects[1].va += .0002;
				break;
		}
	});
}

var exampleSocket = new WebSocket("ws://localhost:8080");
exampleSocket.onopen = (event) => {
	exampleSocket.send("Test 01");
}
exampleSocket.onmessage = function (event) {
  console.log(event.data);
}
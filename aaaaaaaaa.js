var ctx;
 var canvas = document.getElementById('game'),
        canvasRatio,
        windowRatio,
        width,
        height;
function resize() {
        canvasRatio = canvas.height / canvas.width;
        windowRatio = window.innerHeight / window.innerWidth;

        if (windowRatio < canvasRatio) {
            height = window.innerHeight;
            width = height / canvasRatio;
        } else {
            width = window.innerWidth;
            height = width * canvasRatio;
        }

        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        ctx = canvas.getContext('2d')
    };

    window.addEventListener('resize', resize, false);
    resize()
ctx.translate(canvas.height/2,canvas.width/2)

var x = 150,
  y = 150,
  velY = 0,
  velX = 0,
  speed = 5,
  friction = 0.9,
  keys = [];
function update() {
  requestAnimationFrame(update);

  if (keys[38]) {
    if (velY > -speed) {
      velY--;
    }
  }

  if (keys[40]) {
    if (velY < speed) {
      velY++;
    }
  }
  if (keys[39]) {
    if (velX < speed) {
      velX++;
    }
  }
  if (keys[37]) {
    if (velX > -speed) {
      velX--;
    }
  }

  velY *= friction;
  y += velY;
  velX *= friction;
  x += velX;

  if (x >= 295) {
    x = 295;
  } else if (x <= 5) {
    x = 5;
  }

  if (y > 295) {
    y = 295;
  } else if (y <= 5) {
    y = 5;
  }
	angle.x = Math.atan2(mouse.x);
	angle.y = Math.atan2(mouse.y);
  ctx.clearRect(0, 0, 300, 300)
	ctx.beginPath()
	ctx.arc(x, y, 15, 0, Math.PI * 2);
  ctx.rect(x, y - 7.5, 30, 15)
  ctx.stroke()
  ctx.fill()
	

}

update();


document.body.addEventListener("keydown", function(e) {
  keys[e.keyCode] = true;
});
document.body.addEventListener("keyup", function(e) {
  keys[e.keyCode] = false;
});

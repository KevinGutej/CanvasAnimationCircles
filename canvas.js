var canvas = document.querySelector('canvas') // Searching the hole document untill it finds 'canvas'

canvas.width = window.innerWidth; // Setting canvas Width
canvas.height = window.innerHeight; // Setting canvas Height

var c = canvas.getContext('2d');

//c.fillStyle = 'green'
//c.fillRect(100, 100, 100, 100) // x , y , width, height
//c.fillStyle = 'yellow'
//c.fillRect(200, 400, 100, 100) // x , y , width, height
//c.fillStyle = 'blue'
//c.fillRect(600, 200, 100, 100) // x , y , width, height
//console.log(canvas);

//Line
//c.beginPath();
//c.moveTo(50, 300)
//c.lineTo(400, 100)
//c.lineTo(400,250)
//c.strokeStyle = 'red'
//c.stroke();

//Arc circle
//c.beginPath();
//c.arc(180,600,30,0, Math.PI * 2, false)
//c.strokeStyle = 'black'
//c.stroke();

//for (var i = 0; 1 < 3; i++) {
    //var x = Math.random() * window.innerWidth;
    //var y = Math.random() * window.innerHeight;
    //c.beginPath();
    //c.arc(x,y,30,0, Math.PI * 2, false)
    //c.strokeStyle = 'black'
   //c.stroke();
//}



function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    
    this.draw = function() {
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false);
        c.strokeStyle = 'blue';
        c.stroke();
        c.fill();
    }

    this.update = function() {
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0 ) {
            this.dx = -this.dx; //Speed at 1px
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circleArray = [];

for(var i = 0; i < 650; i++) {
    var radius = 30;
    var x = Math.random() * (innerWidth - radius * 2) + radius;
    var y = Math.random() * (innerHeight - radius * 2) + radius;
    var dx = Math.random() - 0.5;
    var dy = Math.random() - 0.5;
    circleArray.push(new Circle(x, y, dx, dy, radius))
    
}


function animate() {
    requestAnimationFrame(animate); // Allows us to create a loop animation
    c.clearRect(0, 0, innerWidth, innerHeight);

    for(var i=0; i < circleArray.length; i++) {
        circleArray[i].update();
    }

}

animate();
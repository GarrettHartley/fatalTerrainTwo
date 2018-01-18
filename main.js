//http://mathforum.org/mathimages/index.php/Transformation_Matrix
var keys = {};
window.onkeyup = function(e) { keys[e.keyCode] = false; }
window.onkeydown = function(e) { keys[e.keyCode] = true; }

var viewXInWorld = 300;
var viewYInWorld = 300;
var objects = []
var ship = new Ship 
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
testInit()


setInterval(function(){
context.clearRect(0,0,canvas.width,canvas.height)
if(keys[37]){
	viewXInWorld = viewXInWorld - 100;
	console.log("left")

}
if(keys[38]){
	viewYInWorld = viewYInWorld - 100;
	console.log("up")

}
if(keys[39]){
	viewXInWorld = viewXInWorld + 100;
	console.log("right")

}
if(keys[40]){
	viewYInWorld = viewYInWorld + 100;
	console.log("down")

}

draw()
}, 42)



function testInit(){
	var red = new RectangleTerrain(300, 300)
	red.color = "red"
	red.height = 600;
	red.width = 600;
	objects.push(red)


	var green = new RectangleTerrain(900, 300)
	green.color = "green"
	green.height = 600;
	green.width = 600;
	objects.push(green)

	var yellow = new RectangleTerrain(300,900)
	yellow.color = "yellow"
	yellow.height = 600;
	yellow.width = 600;
	objects.push(yellow)

	var orange = new RectangleTerrain(900,900)
	orange.color = "orange"
	orange.height = 600;
	orange.width = 600;
	objects.push(orange)

	var ship = new Ship()
	ship.color = "blue"
	objects.push(ship)
}


function draw(){
	console.log("draw")
	for(let i = 0; i < objects.length; i+=1){
		object = objects[i]
		object.draw(context, viewXInWorld, viewYInWorld)
	}



}


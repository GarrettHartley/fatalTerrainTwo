// collisiont with circle http://www.phatcode.net/articles.php?id=459
// collission with rectangle https://stackoverflow.com/questions/14480124/how-do-i-detect-triangle-and-rectangle-intersection
function Ship(){
	this.color = "blue"
	this.viewX  = 300
	this.viewY  = 300
	this.height = 20;
	this.width  = 20;
	this.angle  = 0;


	this.draw = function(context){
		context.fillStyle = this.color;
		context.strokeStyle = this.color;

		context.beginPath();
		context.moveTo(this.viewX - this.width/2, this.viewY + this.height/2)
		context.lineTo(this.viewX + this.width/2, this.viewY + this.height/2)
		context.lineTo(this.viewX + this.width/2, this.viewY - this.height/2)
		context.lineTo(this.viewX - this.width/2, this.viewY - this.height/2)
		context.lineTo(this.viewX - this.width/2, this.viewY + this.height/2)
		context.closePath();
		context.fill();
	}

}	
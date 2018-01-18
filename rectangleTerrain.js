// collisiont with circle http://www.phatcode.net/articles.php?id=459
// collission with rectangle https://stackoverflow.com/questions/14480124/how-do-i-detect-triangle-and-rectangle-intersection
function RectangleTerrain(worldX, worldY){
	this.color = "blue"
	this.worldX = worldX;
	this.worldY = worldY;
	this.viewX  = 0;
	this.viewY  = 0;
	this.height = 20;
	this.width  = 20;
	this.angle  = 0;


	this.draw = function(context, viewXInWorld, viewYInWorld){
		context.fillStyle = this.color;
		context.strokeStyle = this.color;

		// convert world space to view space
		objectCenter = worldToViewSpace(this.worldX, this.worldY)
		object.viewX = objectCenter[0]
		object.viewY = objectCenter[1]

		context.beginPath();
		context.moveTo(this.viewX - this.width/2, this.viewY + this.height/2)
		context.lineTo(this.viewX + this.width/2, this.viewY + this.height/2)
		context.lineTo(this.viewX + this.width/2, this.viewY - this.height/2)
		context.lineTo(this.viewX - this.width/2, this.viewY - this.height/2)
		context.lineTo(this.viewX - this.width/2, this.viewY + this.height/2)
		context.closePath();
		context.fill();
	}

	function worldToViewSpace(worldX, worldY){
		let viewX = worldX - viewXInWorld;
		let viewY = worldY - viewYInWorld;
		return [viewX, viewY]
	}

}	
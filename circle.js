let Circle = function(context, x, y, radius, strokeColor, fillColor) {
	this.c = context
	this.x = x
	this.y = y
	this.radius = radius
	this.strokeColor = strokeColor
	this.fillColor = fillColor
}

Circle.prototype.draw = function() {
	this.c.beginPath()
	this.c.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
	this.c.strokeStyle = this.strokeColor
	this.c.fillStyle = this.fillColor
	this.c.fill()
	this.c.stroke()
}

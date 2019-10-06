let Circle = function(context, x, y, dx, dy, radius, strokeColor, fillColor) {
	this.c = context
	this.x = x
	this.y = y
	this.dx = dx
	this.dy = dy
	this.radius = radius
	this.strokeColor = strokeColor
	this.fillColor = fillColor
}

Circle.prototype.draw = function() {
	this.c.beginPath()
	this.c.arc(this.x, this.y, this.radius, 0, 2*Math.PI)
	// if (this.fillStyle != "#ff0000") { this.fillStyle =  }
	this.c.strokeStyle = this.strokeColor
	this.c.fillStyle = this.fillColor
	this.c.fill()
	this.c.stroke()
}

Circle.prototype.updatePosition = function(sideBound, endBound) {
	Math.abs(this.x) > Math.abs(sideBound - this.radius) ? this.dx = -this.dx : null
	Math.abs(this.y) > Math.abs(endBound - this.radius) ? this.dy = -this.dy : null

	this.x += this.dx
	this.y += this.dy
}

Circle.prototype.detectCollision = function(circleArray) {
	for(anyCircle of circleArray) {
		if (this != anyCircle && this.isTouching(anyCircle)) {
			this.fillColor = 'blue'
			anyCircle.fillColor = 'blue'
		}
	}
}

Circle.prototype.isTouching = function(circle) {
	let distanceBetweenCenters = ((this.x - circle.x)**2 + (this.y - circle.y)**2)**0.5
	return distanceBetweenCenters <= this.radius + circle.radius
}

Circle.prototype.isValid = function(circleArray) {
	if (circleArray.length != 0) {
		for(anyCircle of circleArray) {

			if (this.isTouching(anyCircle)) {
				return false
			}
		}
	}
	return true
}
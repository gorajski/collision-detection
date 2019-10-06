let Scene = function(context, width, height, originX, originY) {
	this.c = context
	this.width = width
	this.height = height
	this.c.translate(originX, originY)
	this.objects = {
		circles: []
	}
}

Scene.prototype.init = function() {
	let circleArray
	this.populateCircles()
}

Scene.prototype.draw = function() {
	for(thisCircle of this.objects.circles) {
		thisCircle.updatePosition(this.width/2, this.height/2)
		thisCircle.detectCollision(this.objects.circles)
		thisCircle.draw()
	}
}

Scene.prototype.populateCircles = function() {

	for(let i = 0; i < 80; i++) {
		let radius = 15
		// let newCircle = new Circle(this.c, (this.width/2-radius)*(2*Math.random()-1), (this.height/2-radius)*(2*Math.random()-1), 0, 0, radius, "red", "red")
		let newCircle = new Circle(this.c, (this.width/2-radius)*(2*Math.random()-1), (this.height/2-radius)*(2*Math.random()-1), 4*Math.random()-2, 4*Math.random()-2, radius, "#ff0000", "#ff0000")
		newCircle.isValid(this.objects.circles) ? this.objects.circles.push(newCircle) : i--
	}	
}
















Scene.prototype.animate = function(scene) {
	this.c.clearRect(-this.width/2, -this.height/2, this.width, this.height)
	this.draw()
	requestAnimationFrame(() => {scene.animate(this)})
}
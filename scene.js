let Scene = function(context, width, height, originX, originY) {
	this.c = context
	this.width = width
	this.height = height
	this.c.translate(originX, originY)
}

Scene.prototype.draw = function() {
	let radius = 40
	let circle = new Circle(this.c, radius*Math.random(), radius*Math.random(), radius, "green", "blue")
	
	circle.draw()
}

Scene.prototype.animate = function(scene) {
	this.c.clearRect(-this.width/2, -this.height/2, this.width, this.height)
	this.draw()
	requestAnimationFrame(() => {scene.animate(this)})
}
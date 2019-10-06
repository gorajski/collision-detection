let incrementColor = function(colorString, percent) {
	
	let redString = colorString.slice(1, 3)
	let greenString = colorString.slice(3, 5)
	let blueString = colorString.slice(5, 7)

	redValue = parseInt(redString, 16)
	greenValue = parseInt(redString, 16)
	blueValue = parseInt(redString, 16)

	redValue = Math.ceil(percent/100 * (255 - redValue) + redValue)
	greenValue = Math.ceil(percent/100 * (255 - greenValue) + greenValue)
	blueValue = Math.ceil(percent/100 * (255 - blueValue) + blueValue)

	colorString = redValue.toString(16) + greenValue.toString(16) + redValue.toString(16)

	while(colorString.length < 6) {
		colorString = "0" + colorString
	}

	return "#" + colorString
}
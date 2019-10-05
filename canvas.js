let canvas = document.querySelector('canvas')
let c = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

let scene = new Scene(c, canvas.width, canvas.height, canvas.width/2, canvas.height/2)
scene.animate(scene)
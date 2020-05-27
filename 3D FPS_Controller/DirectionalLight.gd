extends DirectionalLight
var lightcolor = Color(0, 0, 0)
var green = 1
var blue = 1
var red = 1
var count = 0

# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	count = count + 1
	if count == 10:
		green = randf()
		blue = randf()
		red = randf()
		lightcolor = Color(red, green, blue)
		set_color(lightcolor)
		count = 0

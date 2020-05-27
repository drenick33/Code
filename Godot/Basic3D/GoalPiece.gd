extends Spatial
var speed = 5
var count = 0
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	var count = 5


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	global_translate(Vector3(delta * speed, 0, 0))
	count = count + 1
	print(count)
	if count == 100:
		count = 0
		speed = speed * -1
	

extends StaticBody

#var counter = 0
#var direction = Vector3()
#var is_forward = false
# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	if counter < 100:
#		if is_forward == true:
#			direction.x = 4 * delta
#		else:
#			direction.x = -4 * delta
#		direction.normalized()
#		translate(direction)
#		counter += 1
#	else:
#		if is_forward == true:
#			is_forward = false
#			counter = 0
#		else:
#			is_forward = true
#			counter = 0
#

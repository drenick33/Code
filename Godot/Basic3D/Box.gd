extends Area
var Org = Vector3()

# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	rotate_x(deg2rad(90 * delta))
	rotate_y(deg2rad(90 * delta))


func _on_Box_body_entered(body):
	if body is KinematicBody:
		body.translate(Vector3(0, 0, -30))
		

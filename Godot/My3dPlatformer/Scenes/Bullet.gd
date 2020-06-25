extends Spatial

var velocity = Vector3()
# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	print("Bullet shooting")
	velocity.z = 5
	

func _physics_process(delta):
	move_and_slide(velocity)

extends KinematicBody

const MOVE_SPEED = 12
const JUMP_FORCE = 30
const GRAVITY = 0.98
const MAX_FALL_SPEED = 30

var Velocity = Vector3()
onready var anim = 

# Called when the node enters the scene tree for the first time.
func _ready():
	anim.get_animation("walk").set_loop(true)


# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

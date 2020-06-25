extends KinematicBody

var player = null
var MOVE_SPEED = 15
var gravity = -9.8
const MAX_FALL_SPEED = 30
var JUMP_HEIGHT = 2000
var vec_to_player = Vector3()
var velocity = Vector3()
const damage = 25
var HP = 10
var STUNNED = false
var STUN_COUNT = 0

onready var raycast = $RayCast
# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	add_to_group("enemy")
	$HP_Bar.visible = false
	$HP_BAR_HOLDER.visible = false

func damage(dmg):
	$HP_Bar.visible = true
	$HP_BAR_HOLDER.visible = true
	HP -= dmg
	if HP <= 0:
		kill()
	else:
		STUNNED = true
		$HP_Bar.scale.x = $HP_Bar.scale.x - (dmg * .1)

func stun():
	if STUN_COUNT < 60:
		STUN_COUNT +=1
	else:
		STUNNED = false
		STUN_COUNT = 0
		
	
func chase(delta):
	if player == null:
		return
		
	
	var vec_to_player = player.translation - translation
	vec_to_player = vec_to_player.normalized()
	raycast.cast_to = vec_to_player * 2
	
	velocity = vec_to_player
	vec_to_player.y = 0
	
	
	if velocity.y > 0:
		gravity = -40
	else:
		gravity = -60
	
	move_and_slide(velocity, Vector3(0,1,0))
	
	if !is_on_floor():
		velocity.y = gravity * delta
		
#	if is_on_wall():
#		jump(delta)
#		print("enemy jump works")
	
	move_and_collide(velocity * MOVE_SPEED * delta)


func kill():
	self.queue_free()

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	if STUNNED == false:
		chase(delta)
	else:
		stun()
	

func jump(delta):
#	velocity.y = JUMP_HEIGHT * delta
	pass

func set_player(p):
	player = p

extends KinematicBody

var player = null

onready var raycast = $RayCast
# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	add_to_group("enemy")


func kill():
	self.queue_free()

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	if player == null:
		return
		
	
	var vec_to_player = player.translation - translation
	vec_to_player = vec_to_player.normalized()
	raycast.cast_to = vec_to_player * 2
	
	if raycast.is_colliding():
		var coll = raycast.get_collider()
#		print(coll)
#		if coll == KinematicBody:
##			print(coll)
		if coll != null and coll.name == "Bullet":
			kill()

func set_player(p):
	player = p

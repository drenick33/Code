extends KinematicBody

var hit_something = false
var BULLET_DAMAGE = 10

var velocity = Vector3()
var direction = Vector3()
const speed = 80
# Declare member variables here. Examples:
# var a = 2
# var b = "text"


# Called when the node enters the scene tree for the first time.
func _ready():
	$Area.connect("body_entered", self, "collided")
	

func _physics_process(delta):
	direction = direction.normalized()
#	direction = direction.rotated(Vector3(0,1,0), rotation.y)
	direction = direction * speed
	
	
	move_and_slide(direction)
	if is_on_wall():
		queue_free()


func collided(body):
	if hit_something == false:
		if body.has_method("damage"):
			print("kills")
			body.damage(5)
			
		if body.has_method("bullet_hit"):
			body.bullet_hit(BULLET_DAMAGE, global_transform)

	hit_something = true
	queue_free()

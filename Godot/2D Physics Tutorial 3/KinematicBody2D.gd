extends KinematicBody2D

# Declare member variables here. Examples:
# var a = 2
# var b = "text"

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

func _physics_process(delta):
	var MoveBy = Vector2(0, 0)
	if Input.is_key_pressed(KEY_A):
		MoveBy = Vector2(-100, 0)
	if Input.is_key_pressed(KEY_D):
		MoveBy = Vector2(100, 0)
	if Input.is_key_pressed(KEY_S):
		MoveBy = Vector2(0, 100)
	if Input.is_key_pressed(KEY_W):
		MoveBy = Vector2(0, -100)
	self.move_and_slide(MoveBy, Vector2(0, -1)) #Second vector tells us which direction the floor is
	
	if(is_on_floor()):
		print("On Floor")
	else:
		move_and_collide(Vector2(0, 1))
		
	if(get_slide_count() > 0):
		var collider = self.get_slide_collision(0).collider
		print(collider)
extends Area2D

# Declare member variables here. Examples:
# var a = 2
# var b = "text"

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	if Input.is_key_pressed(KEY_D):
		self.move_local_x(5)
	if Input.is_key_pressed(KEY_A):
		self.move_local_x(-5)
	if Input.is_key_pressed(KEY_W):
		self.move_local_y(-5)
	if Input.is_key_pressed(KEY_S):
		self.move_local_y(5)

func _on_Area2D_area_entered(area):
	print("Entered")


func _on_Area2D_area_exited(area):
	print("Exited")

extends Node

var lives = 5


# Called when the node enters the scene tree for the first time.
func _ready():
	print(lives)

func die():
	lives -= 1
	print(lives)
	get_tree().reload_current_scene()
# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass

#This is for positional 2d audio streams


extends Sprite

# Declare member variables here. Examples:
# var a = 2
# var b = "text"

# Called when the node enters the scene tree for the first time.
func _ready():
	get_viewport().audio_listener_enable_2d = true #Default is true, but just to be safe
	$AudioStreamPlayer2D.play()


func _process(delta):
	if self.position.x > 0 - self.texture.get_width():
		move_local_x(-1)
	else:
		self.position.x = get_viewport().get_visible_rect().size.x
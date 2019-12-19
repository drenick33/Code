extends Button

var player


func _ready():
	player = get_tree().get_root().get_node("Node/AudioStreamPlayer")

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass


func _on_PlayButton_pressed():
	if(get_node("/root/Node/PanelContainer/VBoxContainer/LoopContainer/CheckBoxLoop")).pressed  == true:
		_setLoopMode(player.stream, 1)
	else:
		_setLoopMode(player.stream, 0)
	player.play()

func _setLoopMode(stream, loop):
	if(stream is AudioStreamOGGVorbis):
		stream.loop = bool(loop)
	else:
		stream.loop_mode = loop

func _on_StopButton_pressed():
	player.stop()

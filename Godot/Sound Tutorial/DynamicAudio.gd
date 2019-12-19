extends Node

#Do audio entirely in code
func _ready():
	var player  = AudioStreamPlayer.new()
	self.add_child(player)
	player.stream = load("res://ice-cubes-glass-daniel_simon.wav")
	player.play()
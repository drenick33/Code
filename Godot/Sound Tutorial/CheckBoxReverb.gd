extends CheckBox

# Declare member variables here. Examples:
# var a = 2
# var b = "text"

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.

# Called every frame. 'delta' is the elapsed time since the previous frame.
#func _process(delta):
#	pass


func _on_CheckBoxReverb_toggled(button_pressed):
	AudioServer.set_bus_bypass_effects(AudioServer.get_bus_index("Reverb"), !button_pressed) 

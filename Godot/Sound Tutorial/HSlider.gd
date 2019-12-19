extends HSlider


func _on_HSlider_value_changed(value):
	var pan = AudioServer.get_bus_effect(AudioServer.get_bus_index("LeftRight"), 0)
	pan.pan = value
extends Button

var x = 0

func _on_Button_pressed():
	self.text = String(x)
	x = x + 1



#It's easiest do do this stuff through the inspector, but also possible through code
func _on_Button_mouse_entered():
	self.add_color_override("font_color_hover", Color(0, 0, 0))
	

#Making a theme through code as opposed to the inspector. Will only apply once you run the code	
func _ready():
	var myTheme = Theme.new()
	myTheme.set_color("font_color", "Button", Color(0, 1, 0))
	self.set_theme(myTheme)
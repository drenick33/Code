extends Sprite


func _ready():
	Global.inRegion = 2
	self.position.y = 300
	
#
func _input(event):
	if(event.is_action("ONE")):
		self.position.y = 100
		Global.inRegion = 1
	if(event.is_action("TWO")):
		self.position.y = 250
		Global.inRegion = 2
	if(event.is_action("THREE")):
		self.position.y = 400
		Global.inRegion = 3
	if(event.is_action("FOUR")):
		self.position.y = 550
		Global.inRegion = 4

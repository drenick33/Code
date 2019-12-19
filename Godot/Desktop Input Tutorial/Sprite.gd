extends Sprite


#global var for keyboard
#var justwarped = false

#global vars for joypad
#var deadZone = 0.2
#var speedmultiplier = 3




func _input(event):
	if(event.is_action("LEFT")):
		self.position.x -= 1



#
#
#
# This code is for a joypad
#func _ready():
#	Input.connect("joy_connection_changed", self, "joy_con_changed")


#func joy_con_changed(deviceid, isConnected):  #Check if connected, and provide console output
#	if isConnected:
#		print("Joystick " + String(deviceid) + " is connected.")
#		if Input.is_joy_known(0):
#			print("Recognized controller")
#			print(Input.get_joy_name(0) + " device found")
#	else:
#		print("Controller is disconnected")
#
#
#func _process(delta): #Check for inputs
#	if Input.get_connected_joypads().size() > 0:  #Make sure there's at least one joypad connected
#		var xAxis = Input.get_joy_axis(0, JOY_AXIS_0)   #Gets the left stick axis
#		if abs(xAxis) > deadZone: #Make sure it's pressed beyond a deadZone threshold
#			if xAxis < 0: #Check for one direction
#				self.position.x -= 100 * delta * (speedmultiplier * abs(xAxis))
#			if xAxis > 0: #Check for the other
#				self.position.x += 100 * delta * (speedmultiplier * abs(xAxis))
#
#
				#Check for buttons
#		if Input.is_joy_button_pressed(0, JOY_DPAD_UP):
#			self.position.y -= 100 * delta
#		if Input.is_joy_button_pressed(0, JOY_DPAD_DOWN):
#			self.position.y += 100 * delta
#
#				#Output the button that was just pressed
#		for i in range(16):
#			if Input.is_joy_button_pressed(0, i):
#				print("Button ", str(i) + " pressed, should be ",  Input.get_joy_button_string(i))
				
				
				
				
#This code uses input event handling
#func _input(event):
#	if event is InputEventKey:
#		print("Key pressed " + char(event.scancode))	
#		if(event.echo == true):
#			print("Key was held down")
#		else:
#			print("First press")
#
#	if(event is InputEventMouseMotion):
#		if !justwarped:
#			self.translate(event.relative)
#		else:
#			justwarped = false
#
#	if(event is InputEventMouseButton):
#		match event.button_index:
#			BUTTON_LEFT: 
#				Input.warp_mouse_position(self.position)
#				justwarped = true
#			BUTTON_RIGHT:
#				self.position = Vector2(get_viewport().size.x/2, get_viewport().size.y/2)
		
		
		
				
#This code uses polling. Basically constantly asking, "Hey, did anything happen?, did anything happen?"
#func _process(delta):
#	if Input.is_key_pressed(KEY_LEFT):
#		self.position.x -= 1
#	if Input.is_key_pressed(KEY_RIGHT):
#		self.position.x += 1
#	if Input.is_key_pressed(KEY_UP):
#		if Input.is_key_pressed(KEY_SHIFT):
#			self.position.y -= 10
#		else:
#			self.position.y -= 1
#	if Input.is_key_pressed(KEY_DOWN):
#		if Input.is_key_pressed(KEY_SHIFT):
#			self.position.y += 10
#		else:
#			self.position.y += 1
#	if Input.is_key_pressed(KEY_Q):
#		get_tree().quit()
#
#	if Input.is_mouse_button_pressed(BUTTON_LEFT):
#		self.position = get_viewport().get_mouse_position()
extends KinematicBody

var camera_angle = 0
var mouse_sensitivity = 0.3
var camera_change = Vector2()

var velocity = Vector3()
var direction = Vector3()

#Fly Variables
const FLY_SPEED = 15
const FLY_ACCEL = 4
var flying = false

#Walk Variables
var gravity = 9.8 * 3
const MAX_SPEED = 20
const MAX_RUNNING_SPEED = 30
const ACCEL = 2
const DEACCEL = 6

#Jump variables
var JUMP_HEIGHT = 15
var has_contact = false

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.


func _physics_process(delta):
	aim()
	
	if flying:
		fly(delta)
	else:
		walk(delta)

func _input(event):
	if event is InputEventMouseMotion:
		camera_change = event.relative
			
func walk(delta):
			#Reset the direction of the player
	direction = Vector3()
	
	#get the rotation of the camera
	var aim = $head/Camera.get_camera_transform().basis
	
	#check input and change direction
	if Input.is_action_pressed("move_forward"):
		direction -= aim.z
	if Input.is_action_pressed("move_backward"):
		direction += aim.z
	if Input.is_action_pressed("move_left"):
		direction -= aim.x
	if Input.is_action_pressed("move_right"):
		direction += aim.x
	
	direction.y = 0	
	direction = direction.normalized()
	
	if is_on_floor():
		has_contact = true
	else:
		if !$RayCast.is_colliding():
			has_contact = false
		velocity.y -= gravity * delta
	
	if(has_contact and !is_on_floor()):
		move_and_collide(Vector3(0, -1, 0))
	
	
	var temp_velocity = velocity
	temp_velocity.y = 0
	
	
	var speed = 0
	if Input.is_action_pressed("move_sprint"):
		speed = MAX_RUNNING_SPEED
	else:
		speed = MAX_SPEED
	
	var acceleration = 0
	if direction.dot(temp_velocity) > 0:
		acceleration = ACCEL
	else:
		acceleration = DEACCEL
	
	
	#Where the player would go at max speed
	var target = direction * speed
	
	#Calculate of porition of the distance to go
	temp_velocity = temp_velocity.linear_interpolate(target, acceleration * delta)
	
	velocity.x = temp_velocity.x
	velocity.z = temp_velocity.z
	
	if has_contact:
		if Input.is_action_pressed("jump"):
			velocity.y = JUMP_HEIGHT
			has_contact = false
	
	#move
	velocity = move_and_slide(velocity, Vector3(0,1,0), true)
	
	
	
func fly(delta):
		#Reset the direction of the player
	direction = Vector3()
	
	#get the rotation of the camera
	var aim = $head/Camera.get_camera_transform().basis
	
	#check input and change direction
	if Input.is_action_pressed("move_forward"):
		direction -= aim.z
	if Input.is_action_pressed("move_backward"):
		direction += aim.z
	if Input.is_action_pressed("move_left"):
		direction -= aim.x
	if Input.is_action_pressed("move_right"):
		direction += aim.x
		
	direction = direction.normalized()
	
	#Where the player would go at max speed
	var target = direction * FLY_SPEED
	
	#Calculate of porition of the distance to go
	velocity = velocity.linear_interpolate(target, FLY_ACCEL * delta)
	
	#move
	move_and_slide(velocity)

func aim():
	if camera_change.length() > 0:
		$head.rotate_y(deg2rad(-camera_change.x * mouse_sensitivity))
		var change = -camera_change.y * mouse_sensitivity
		
		if change + camera_angle < 90 and change + camera_angle > -90:
			$head/Camera.rotate_x(deg2rad(change))
			camera_angle += change
		camera_change = Vector2()


func _on_ladder_area_body_entered(body):
	if body.name == "Player":
		flying = true


func _on_ladder_area_body_exited(body):
	if body.name == "Player":
		flying = false







func _on_Area_body_entered(body):
	if body is KinematicBody:
		velocity.y = 50
		has_contact = false
		velocity = move_and_slide(velocity, Vector3(0,1,0), 1)
		print("words")


func _on_Ball_Area_body_entered(body):
	if body is KinematicBody:
		if !body.is_on_floor():
			velocity.y = 60
			has_contact = false
			velocity = move_and_slide(velocity, Vector3(0,1,0), 1)
			print("words")

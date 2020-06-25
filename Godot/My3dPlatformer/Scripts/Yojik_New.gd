extends KinematicBody

#@TODO Make enemies have health bars above their heads
const MOVE_SPEED = 12
const JUMP_FORCE = 10
var gravity = 0.98
const MAX_FALL_SPEED = 30
var velocity = Vector3()
var direction = Vector3()
var accel_mult = 1
const accel_max = 50
var speed = 50
 
var JUMP_HEIGHT = 20
var has_contact = false

var shoot_cooldown = 0
var attacking = false
var just_attacked = false
var melee_cooldown = 0


const H_LOOK_SENS = 1.0
const V_LOOK_SENS = 1.0
 
onready var cam = $CamBase
var y_velo = 0

var WALL_JUMPING = false
var JUST_WALL_JUMPED = false
var WALL_JUMP_DECCEL = 5
var WALL_FORCE = 70

var MAX_HP = 100
var CURRENT_HP = 100
var IS_DEAD = false


var JUST_RECOILED = false
var RECOIL = false
var cooldown = 0

# Called when the node enters the scene tree for the first time.
func _ready():
	Input.set_mouse_mode(Input.MOUSE_MODE_CAPTURED)
	var current_scene = get_tree().get_current_scene()
	get_tree().call_group("enemy", "set_player", self)
	$Area.connect("body_entered", self, "collided")
	Set_Health()
	
	
	
func _input(event):
	if event is InputEventMouseMotion:
		aim(event)

func _process(delta):
	if Input.is_action_pressed("quit"):
		quit()
		
	if IS_DEAD == true:
		die()
	else:
		if RECOIL == true:
			recoil()
		else:
			if WALL_JUMPING == false:
				walk(delta)
			else:
				wall_jump(delta)
		
func walk(delta):
	#Reset the direction
	direction = Vector3(0, 0, 0)
	
	#Get direction from user input
	if Input.is_action_pressed("ui_left"):
		direction.x -=1
	if Input.is_action_pressed("ui_right"):
		direction.x +=1
	if Input.is_action_pressed("ui_up"):
		direction.z -=1		
	if Input.is_action_pressed("ui_down"):
		direction.z +=1
		
	if direction.z != 0 or direction.x !=0 :
		if accel_mult < accel_max:
			accel_mult += 1
	else:
		accel_mult = 1
		
	if is_on_wall():
		accel_mult = 1
	#Normalize and set direction for movement
	direction = direction.normalized()
	direction = direction.rotated(Vector3(0,1,0), rotation.y)
	direction = direction * speed * delta * accel_mult
	
	#Variable if is on floor
	if is_on_floor():
		has_contact = true
	else:
		has_contact = false
		velocity.y += gravity * delta
	
	#Jumping code
	if has_contact and Input.is_action_pressed("jump"):
		jump(delta)
	elif is_on_floor():
		velocity.y = -2
	
	#transfer values
	velocity.x = direction.x
	velocity.z = direction.z
	
	#Walljump
	if !has_contact and Input.is_action_pressed("jump"):
		if is_on_wall():
			WALL_JUMPING = true
			JUST_WALL_JUMPED = true
			wall_jump(delta)
	
	
	
	#Make gravity lower to cling on walls
	if velocity.y > 0:
		gravity = -40
	else:
		if is_on_wall():
			gravity = -20
		else:
			gravity = -60
	
	#Move
	velocity = move_and_slide(velocity, Vector3(0, 1, 0))
		
	#Reset the scene
	if Input.is_action_pressed("reset"):
		get_tree().reload_current_scene()
		
		
	#for standard shooting
	if Input.is_action_pressed("attack"):
		if shoot_cooldown == 0:
			shoot(delta)
			shoot_cooldown += 1
		elif shoot_cooldown == 10:
			shoot_cooldown = 0
		else:
			shoot_cooldown += 1

	if Input.is_action_just_released("attack"):
		shoot_cooldown = 0
		
		
	#Code For melee attack
	if Input.is_action_just_pressed("melee"):
		if just_attacked == false:
			get_node("CollisionShape/MeshInstance/AnimationPlayer").play("melee")
			attacking = true
			just_attacked = true
			
		
	if just_attacked == true:
		if melee_cooldown < 60:
			melee_cooldown +=1
		else:
			melee_cooldown = 0
			just_attacked = false
			print("Reset attack")
		
		
	if attacking == true:
		if get_node("CollisionShape/MeshInstance/AnimationPlayer").is_playing() == false:
			attacking = false
			print("finished")

func jump(delta):
	velocity.y = JUMP_HEIGHT
	
func wall_jump(delta):
	if JUST_WALL_JUMPED == true:
		velocity.y = JUMP_HEIGHT
		var wall = get_slide_collision(0).normal
		velocity += wall
		print(wall)
		if wall.x > 0.5:
			velocity.x = WALL_FORCE
			print("Greater X")
		elif wall.x < -0.5:
			velocity.x = -WALL_FORCE
			print("Lesser X")
		
		if wall.z > 0.5:
			velocity.z = WALL_FORCE
			print("Greater Z")
		elif wall.z < -0.5:
			velocity.z = -WALL_FORCE
			print("Lesser Z")
			
	JUST_WALL_JUMPED = false
	
	velocity = move_and_slide(velocity, Vector3(0, 1, 0))
	
	if velocity.x > 0:
		velocity.x -= WALL_JUMP_DECCEL
		if velocity.x < 0:
			velocity.x = 0
	if velocity.x < 0:
		velocity.x += WALL_JUMP_DECCEL
		if velocity.x > 0:
			velocity.x = 0
			
	if velocity.z > 0:
		velocity.z -= WALL_JUMP_DECCEL
		if velocity.z < 0:
			velocity.z = 0
	if velocity.z < 0:
		velocity.z += WALL_JUMP_DECCEL
		if velocity.z > 0:
			velocity.z = 0
		
	if velocity.x == 0 and velocity.z == 0:
		WALL_JUMPING = false
	
	gravity = -60
	velocity.y += gravity * delta
	print("runs")
	

func shoot(delta):
	#Spawn a projectile
	var shoot_from = self.global_transform.origin
	
	var ch_pos = $CamBase/Camera/crosshair.get_global_position()
	
	var ray_from =  $CamBase/Camera.project_ray_origin(ch_pos)
	var ray_dir = $CamBase/Camera.project_ray_normal(ch_pos)
			
	var shoot_target
	var col = get_world().direct_space_state.intersect_ray(ray_from, ray_from + ray_dir * 1000, [self])
	if col.empty():
		shoot_target = ray_from + ray_dir * 1000
	else:
		shoot_target = col.position
	var shoot_dir = (shoot_target - shoot_from).normalized()
	
	var projectile = preload("res://Scenes/Bullet.tscn")
	var bullet = projectile.instance()
	get_parent().add_child(bullet)
	bullet.global_transform.origin = shoot_from
	bullet.direction = shoot_dir
	bullet.add_collision_exception_with(self)


func aim(event):
	cam.rotation_degrees.x -= event.relative.y * V_LOOK_SENS
	cam.rotation_degrees.x = clamp(cam.rotation_degrees.x, -90, 90)
	rotation_degrees.y -= event.relative.x * H_LOOK_SENS
	
func die():
	if IS_DEAD == false:
		get_node("CollisionShape/MeshInstance/AnimationPlayer").play("die")
	IS_DEAD = true
	if get_node("CollisionShape/MeshInstance/AnimationPlayer").is_playing() == false:
		IS_DEAD = false
		get_tree().reload_current_scene()

func quit():
	Input.set_mouse_mode(Input.MOUSE_MODE_VISIBLE)
	get_tree().quit()


func _on_DeathZone_body_entered(body):
	if body.name == "Yojik_New":
		die()


func _on_Batut_body_entered(body):
	if body.name == "Yojik_New":
		velocity.y = 50
		has_contact = false
		velocity = move_and_slide(velocity, Vector3(0,1,0), 1)
		print("words")

func Set_Health():
	get_node("CamBase/Camera/Health").set_text("Yojik's Health: " + String(CURRENT_HP))

func recoil():
	#@TODO: Make recoil change depending on how you're facing
	if JUST_RECOILED == true:
		JUST_RECOILED = false
		var cooldown = 0
	
	if cooldown < 15:
#		velocity.x = -50
		velocity.z = -69
		move_and_slide(velocity, Vector3(0,1,0))
		cooldown += 1
	else:
		velocity.x = 0
		velocity.z = 0
		cooldown = 0
		RECOIL = false
	
	

func collided(body):
	if body.is_in_group("enemy"):
		if attacking == false:
			CURRENT_HP -= body.damage
			Set_Health()
			if CURRENT_HP <= 0:
				die()
			else:
				JUST_RECOILED = true
				RECOIL = true
		else:
			if body.has_method("damage"):
				print("damage")
				body.damage(5)

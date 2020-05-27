extends KinematicBody

#Movement Variables
var speed = 42
var direction = Vector3()
var gravity = -9.8
var velocity = Vector3()
var accel_mult = 1
const accel_max = 30

#Spin Variables
var ROTATE = 180
var IS_FOWARD = false
var IS_BACKWARD = false
var IS_LEFT = false
var IS_RIGHT = false

#Jump variables
var JUMP_HEIGHT = 30
var has_contact = false

#Bouncy variable
var IS_BOUNCY = false

#Stats Variable
var IS_ATTACKING = false
var attack_timer = 0

# Called when the node enters the scene tree for the first time.
func _ready():
	pass
	
func _physics_process(delta):
	walk(delta)
	if IS_BOUNCY == true and has_contact == true:
		jump(delta)
	if IS_ATTACKING == true:
		attack(delta)
		$CollisionShape.set_scale(Vector3(1.1, 1.1, 1.1))
	else:
		$CollisionShape.set_scale(Vector3(1, 1, 1))
	

func walk(delta):
	direction = Vector3(0, 0, 0)
	
	if Input.is_action_pressed("ui_left"):
		direction.x +=1
	if Input.is_action_pressed("ui_right"):
		direction.x -=1
	if Input.is_action_pressed("ui_up"):
		direction.z +=1		
	if Input.is_action_pressed("ui_down"):
		direction.z -=1
		
	if direction.z != 0 or direction.x !=0 :
		if accel_mult < accel_max:
			accel_mult += 1
	else:
		accel_mult = 1
		
	if is_on_wall():
		accel_mult = 1
	
	direction = direction.normalized()
	direction = direction * speed * delta * accel_mult
	
	
	if is_on_floor():
		has_contact = true
	else:
		has_contact = false
		velocity.y += gravity * delta
	
	if Input.is_action_just_pressed("attack"):
		IS_ATTACKING = true
	
	
	if has_contact and Input.is_action_pressed("jump"):
		jump(delta)
	elif is_on_floor():
		velocity.y = -2
	
	velocity.x = direction.x
	velocity.z = direction.z

	
	if velocity.y > 0:
		gravity = -40
	else:
		gravity = -60
			
	spin(delta)
	velocity = move_and_slide(velocity, Vector3(0, 1, 0))
		
	if Input.is_action_pressed("reset"):
		get_tree().reload_current_scene()
		
	if Input.is_action_just_pressed("attack"):
		shoot(delta)
		
func shoot(delta):
	#Spawn a projectile
	var shoot_from = self.global_transform.origin
	var projectile = preload("res://Scenes/Bullet.tscn")
	var bullet = projectile.instance()
	get_parent().add_child(bullet)
	bullet.global_transform.origin = shoot_from
	bullet.add_collision_exception_with(self)

func spin(delta):
	if ROTATE == 360:
		ROTATE = 0
	
	if Input.is_action_pressed("ui_up"):
		if Input.is_action_pressed("ui_left"):
			if ROTATE == 130:
				pass
			elif ROTATE < 130:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(10))
				ROTATE +=10
			elif ROTATE > 130:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
				ROTATE -=10		
		elif Input.is_action_pressed("ui_right"):
			if ROTATE == 230:
				pass
			elif ROTATE < 230:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(10))
				ROTATE +=10
			elif ROTATE > 230:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
				ROTATE -=10		
		else:
			if ROTATE == 180:
				$CollisionShape/MeshInstance.set_rotation_degrees(Vector3(0, 0, 0))
			elif ROTATE != 180:
				if ROTATE < 180:
					$CollisionShape/MeshInstance.rotate_z(deg2rad(10))
					ROTATE +=10
				else:
					$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
					ROTATE -=10			
	elif Input.is_action_pressed("ui_down"):
		if Input.is_action_pressed("ui_left"):
			if ROTATE == 40:
				pass
			elif ROTATE > 40 and ROTATE < 180:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
				ROTATE -= 10
			else:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(10))
				ROTATE +=10
		elif Input.is_action_pressed("ui_right"):
			if ROTATE == 300:
				pass
			elif ROTATE == 0:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
				ROTATE = 350
			elif ROTATE <= 180:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
				ROTATE -= 10
			elif ROTATE > 180 and ROTATE < 300:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(10))
				ROTATE +=10
			else:
				$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
				ROTATE -= 10
		else:
			if ROTATE != 0:
				if ROTATE >= 180:
					$CollisionShape/MeshInstance.rotate_z(deg2rad(10))
					ROTATE +=10
				else:
					$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
					ROTATE -=10	
	elif Input.is_action_pressed("ui_left"):
		if ROTATE == 90:
			pass
		elif ROTATE > 90 and ROTATE <= 270:
			$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
			ROTATE -=10
		elif ROTATE < 90:
			$CollisionShape/MeshInstance.rotate_z(deg2rad(10))
			ROTATE +=10
		elif ROTATE > 270:
			$CollisionShape/MeshInstance.rotate_z(deg2rad(10))
			ROTATE +=10
	elif Input.is_action_pressed("ui_right"):
		if ROTATE == 270:
			pass
		if ROTATE <= 0:
			ROTATE = 350
		elif ROTATE < 90:
			$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
			ROTATE -=10
		elif ROTATE < 270:
			$CollisionShape/MeshInstance.rotate_z(deg2rad(10))
			ROTATE +=10
		elif ROTATE > 270:
			$CollisionShape/MeshInstance.rotate_z(deg2rad(-10))
			ROTATE -=10
	
func jump(delta):
	velocity.y = JUMP_HEIGHT
	get_node("CollisionShape/MeshInstance/AnimationPlayer").play("Jump_Animation")

func attack(delta):
	if attack_timer <  0.42:
		attack_timer += delta
		#print(attack_timer)
	else:
		#print("attack finished")
		attack_timer = 0
		IS_ATTACKING = false

func die():
	get_tree().reload_current_scene()


func _on_DeathZone_body_entered(body):
	die()
		
		
		
		
		

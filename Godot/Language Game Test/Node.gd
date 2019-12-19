extends Node

var native = ["привет"]
var trans = ["hi"]
var word_difficulty = [1]



# Declare member variables here. Examples:
# var a = 2
# var b = "text"

# Called when the node enters the scene tree for the first time.
func _ready():
	print("The native word is: ", native[0])
	print("The translation is: ", trans[0])
	print("The difficulty of the word is: ", word_difficulty[0])
	$CanvasLayer/NativeWord.text = native[0]
	
	
	
	native.append("кошка")
	trans.append("cat")
	word_difficulty.append(1)
	native.append("собока")
	trans.append("dog")
	word_difficulty.append(1)
	native.append("медведь")
	trans.append("bear")
	word_difficulty.append(1)
	native.append("ёжик")
	trans.append("hedgehog")
	word_difficulty.append(1)
	
	randomize()
	_genWords() #process that generates the words------------
#
#	_scrollWords()
#	

#------------Start the game---------------------------------
	
func _genWords():
	if native.size() == trans.size():
		
#------------Select the correct answer-----------------------

		var ans = randi()%native.size()
		print("Answer is: ", ans, native[ans])	#Debug info--------------
		
#------------Generate random incorrect answers---------------
		var wrong1 = randi()%native.size()
		while(wrong1 == ans):
			wrong1 = randi()%native.size()	
		print("Wrong 1 is: ", wrong1, native[wrong1]) #Debug info--------------
		
		var wrong2 = randi()%native.size()
		while(wrong2 == ans or wrong2 == wrong1):
			wrong2 = randi()%native.size()		
		print("Wrong 2 is: ", wrong2, native[wrong2]) #Debug info--------------
		
		
		var wrong3 = randi()%native.size()
		while(wrong3 == ans or wrong3 == wrong1 or wrong3 == wrong2):
			if(wrong3 < (native.size() - 1)):
				wrong3 += 1
			else:
				wrong3 = 0		
		print("Wrong 3 is: ", wrong3, native[wrong3]) #Debug info--------------
		
#--------------Make the top be the correct answer--------------	
		$CanvasLayer/NativeWord.text = native[ans] #Correct answer	
		var CorrectLane = randi()%4+1
		Global.answerRegion = CorrectLane

#--------------Generate the answers-----------------------------
		if(CorrectLane == 1):
			$CanvasLayer/Answer1.text = trans[ans]
			$CanvasLayer/Answer2.text = trans[wrong1]
			$CanvasLayer/Answer3.text = trans[wrong2]
			$CanvasLayer/Answer4.text = trans[wrong3]
		elif(CorrectLane == 2):
			$CanvasLayer/Answer1.text = trans[wrong1]
			$CanvasLayer/Answer2.text = trans[ans]
			$CanvasLayer/Answer3.text = trans[wrong2]
			$CanvasLayer/Answer4.text = trans[wrong3]
		elif(CorrectLane == 3):
			$CanvasLayer/Answer1.text = trans[wrong1]
			$CanvasLayer/Answer2.text = trans[wrong2]
			$CanvasLayer/Answer3.text = trans[ans]
			$CanvasLayer/Answer4.text = trans[wrong3]
		elif(CorrectLane == 4):
			$CanvasLayer/Answer1.text = trans[wrong1]
			$CanvasLayer/Answer2.text = trans[wrong2]
			$CanvasLayer/Answer3.text = trans[wrong3]
			$CanvasLayer/Answer4.text = trans[ans]
		
		
		
		print(ans)
	else:
		print("Unequal words and translations")

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	if(get_node("CanvasLayer/Answer1").rect_position.x > 0):
		$CanvasLayer/Answer1.rect_position.x -= 300 * delta * Global.speed
		$CanvasLayer/Answer2.rect_position.x -= 300 * delta * Global.speed
		$CanvasLayer/Answer3.rect_position.x -= 300 * delta * Global.speed
		$CanvasLayer/Answer4.rect_position.x -= 300 * delta * Global.speed
	else:
		if(Global.inRegion == Global.answerRegion):
			$CanvasLayer/Feedback.text = "Correct!"
		else:
			$CanvasLayer/Feedback.text = "Incorrect!"
		_scrollWords()
		Global.speed += 1
		_genWords()
	



func _scrollWords():
	$CanvasLayer/Answer1.rect_position.x = 2000
	$CanvasLayer/Answer2.rect_position.x = 2000
	$CanvasLayer/Answer3.rect_position.x = 2000
	$CanvasLayer/Answer4.rect_position.x = 2000
#	_genWords()


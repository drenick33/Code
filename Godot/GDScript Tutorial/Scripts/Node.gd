extends Node
var answer = 42 #This is outside the other functions so  it's a global variable
				#The type is inffered by Godot. This is called duck typing
				#If it looks like a duck, quacks like a duck and acts like a duck: It's a duck
				#You can declare more explicitly with:     var answer = Int(42)

const  pi = 3.14 #You can also declare a variable as a constant (supposedly)
export var mutable = 3 #Exports a variable, and makes it so you can change it in the editor, etc.
						#This is found under script variables
export(Texture) var Sprite #This creates an image class, and lets you edit it in the editore under Inspector

func _ready():
	var a = 1 #This is a local variable  and only available to this function of the script
	var b = 3.14 #This is floating type usually but might change depending on duck typing
	var c = "3" #this is a string
	var d = Vector2(1,0) #This is a vector
	var e = String(b) + c #Ducktyping in action, making sure b is a String even though it isn't explicitly declared as a String
	print(e)
	print("Say hi to the global variable: ", answer)
	
	var ZerotoNine = Array()
	for i in range(10):
		ZerotoNine.append(i);
		print("Added value: ", ZerotoNine[i])
		
	print("The final array is: ", ZerotoNine)
	
	var EmptyArray = []
# warning-ignore:unused_variable
	var intArray = [1, 2]
	var StringArray = ["one",  "two"]
	var TypeDoesntMatterArray = [1, "two", 3.14]
	print(TypeDoesntMatterArray)
	TypeDoesntMatterArray.append(answer) #.append extends the array
	print(TypeDoesntMatterArray)
	
	#Dictionaries
	var Monster = {}  #Creates an empty dictionary
	Monster["Name"] = "Orc" #Sets the "key" Name, and attributes the "value" Orc
	print(Monster.Name) #Access the value set above 
	
	
	#When adding more keys to tables, seperate them with a ,
	var enemy = { #Creates a dictionary
		"Orc" : {	#Creates a dicitonary in a dictionary
			"HP" : 42, #Attributes the value 42 to the key HP of enemy Orc
			"Alignment" : "Chaotic Neutral" #Attributes another characteristic to Orc
			},
		"Elf" : {
			"HP" : 69,
			"Alignment" : "Lawful Neutral"
			}
		}
	print(enemy.Elf.HP)
	
	#If Statements
	
	if(enemy.Elf.HP < 5):
		print("Elf needs food badly")
	elif(enemy.Elf.HP < 10):
		print("Elf needs food")
	else:
		print("Elf is feeling fine")
		
		
		
		
	#Match Statements
	var val = 6 #new variable
	match val: #similar to switch in other languages. Essentially a long table of if's and elif statements
		1: print("Value is one") #Only happens if val = 1
		2, 3, 4, 5: print("Value is between two and five") #You can have multiple checks
		6: 	
			print("Value is six") #Only if val - 6, so this gets run
			#continue   #This line of code continues the match search even if it already happened
		_: print("Value is something else") #This is a catch all. It runs if all previous values aren't true. Essential an else statement
		
	#Code using a global variable from a different script
	match GameGlobals.MeaningofLife:
			42: print("42 is the meaning of life")
			_: print("Incorrect, 42 is the meaning of life")
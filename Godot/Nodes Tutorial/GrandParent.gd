extends Node

func _ready():
	print("This is from Grandparent: " + get_node("Parent/Child2").name) #print name of a lower node
	print($Parent.name) #short hand for get_node() 
	print($Parent.get_child(0).name) #Print the name of the child of parent with index value of 0
	print(find_node("Child2", true, false).name) #use of find_node
	print($Parent.get_children()[0].name) #get the name of the 1st array of children using an array of nodes
	
	# get_tree().change_scene("MyScene2.tscn") #Switch to a different scene (which doesn't exist in our example) 
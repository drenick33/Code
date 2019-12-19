extends Node

func _ready():
	print("Hello World") #print random text
	print("parent name is: " + get_parent().name) #print the name of the parent node 
	print("The parent's parent name is: " + get_parent().get_parent().name) #print the name of the node 2 parents up
	print(get_node(".").name) #print the name of the current node
	print(get_node("..").name) #print the name of the node above
	print(get_node("../..").name) #print the name of two nodes above
	print(get_tree().get_root().get_node("Root").name) #print the name of the root node
	print(get_tree().get_root().get_node("Root/GrandParent/Parent/Child2").name) #print the name of any node
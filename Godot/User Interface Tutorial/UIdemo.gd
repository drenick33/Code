extends Node

# Declare member variables here. Examples:
# var a = 2
# var b = "text"

# Called when the node enters the scene tree for the first time.

func _ready():
	var diag = AcceptDialog.new()
	diag.get_label().text = "Are you sure?"
	self.add_child(diag)
	diag.popup_centered()



#for confirmation dialog node
#func _ready():
##	$ConfirmationDialog.get_cancel().connect("pressed", self, "_on_Cancel")
##	$ConfirmationDialog.show_modal(true)
##
##func _on_Cancel():
##	print("Cancelled")

#For file dialogue
#func _on_FileDialog_file_selected(path):
#	print("File selected at: ", path)


#Code for confirmationdialog node
#func _on_ConfirmationDialog_confirmed():
#	print("Ok clicked.")

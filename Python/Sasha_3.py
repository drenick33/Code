import keyboard # Needs to be root to run on linux

#This program will make a huge file very quickly, be careful

count = 0
lov = 0
Message = " "

while lov == 0:
   try:
      if keyboard.is_pressed('q'):
         print("I love Sasha! " * 2000)
         count+=2000
         Message = (Message + "I love Sasha!" * 2000)
         lov = 1
         print("You loved Sasha: " + str(count) + " times!")
      else:
         print("I love Sasha! " * 2000)
         Message = (Message + "I love Sasha!" * 2000)
         count+=2000

   except:
         print("I love Sasha! " * 2000)
         count+=2000

file = open("Sasha.txt", "w")
file.write(Message)
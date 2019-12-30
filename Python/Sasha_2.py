import keyboard # Needs to be root to run on linux


count = 0
lov = 0

while lov == 0:
   try:
      if keyboard.is_pressed('q'):
         print("I love Sasha! " * 2000)
         count+=2000
         lov = 1
         print("You loved Sasha: " + str(count) + " times!")
      else:
         print("I love Sasha! " * 2000)
         count+=2000

   except:
         print("I love Sasha! " * 2000)
         count+=2000

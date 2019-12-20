while True:
    print("Options: ")
    print("Enter: + to add two numbers")
    print("Enter: - to subract two numbers")
    print("Enter: x to multiply two numbers")
    print("Enter: / to divide two numbers")
    print("Enter: quit to divide two numbers")
    user_input = input(": ")

    if user_input == "quit":
        break
    elif user_input == "+":
        num1 = float(input("Enter a number: "))
        num2 = float(input("Enter another number: "))
        print("The sum is: " + str(num1 + num2))
    elif user_input == "-":
        num1 = float(input("Enter a number: "))
        num2 = float(input("Enter another number: "))
        print("The sum is: " + str(num1 - num2))
    elif user_input == "x":
        num1 = float(input("Enter a number: "))
        num2 = float(input("Enter another number: "))
        print("The sum is: " + str(num1 * num2))
    elif user_input == "/":
        num1 = float(input("Enter a number: "))
        num2 = float(input("Enter another number: "))
        print("The sum is: " + str(num1 / num2))
    else:
        print("Unknown input")
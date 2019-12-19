fun greetUser(name: String){
    println("Hello $name");
    println("Please insert two numbers to add, $name")
    var x = readLine()!!.toInt();
    var y = readLine()!!.toInt();
    printSum(x, y);
}

fun printSum(num1: Int, num2: Int){
    println("The sum is ${num1 + num2}!");
}

fun main(args: Array<String>) {
    println("Please enter your name: ")
    var entry1 = readLine()!!;
    greetUser(entry1);
}
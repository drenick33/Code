fun main(args: Array<String>) {
    println("please input a String.");
    val test = readLine();
    println("Yout input is $test");

    println("Please input number 1");
    val num1 = readLine()!!.toInt();
    println("Please input number 2");
    val num2 = readLine()!!.toInt();
    println("The sum of number 1 and number 2 is: " + (num1 + num2));
}
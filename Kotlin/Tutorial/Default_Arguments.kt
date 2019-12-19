fun getSum(num1: Int, num2: Int, num3: Int = 3): Int{
    return num1 + num2 + num3;
}

fun main(args: Array<String>) {
    val a = 4
    val b = 3
    val c = 5
    println("The sum is: ${getSum(a, b, c)}")
    println("The sum of two numbers is: ${getSum(a, b)}")
    println(getSum(a, num2 = 2));
}
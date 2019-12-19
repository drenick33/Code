//The extra : Int defines the function's return value
fun getProduct(num1: Int, num2: Int): Int {
    return num1 * num2
}

fun main(args: Array<String>) {
    println("Please input two numbers to multiply: ")
    var a = readLine()!!.toInt();
    var b = readLine()!!.toInt();
    val product = getProduct(a, b);
    println("The product of $a and $b is: $product")
}
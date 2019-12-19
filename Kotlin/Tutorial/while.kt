//find a number to a certain power

fun main(args: Array<String>) {
    println("insert a number: ");
    val x = readLine()!!.toInt();
    println("to what power to you want to find?")
    var y = readLine()!!.toInt();
    var result = x;
    var count = 1;
    while(count < y){
        result = result * x;
        count++;
    }
    println("The answer is $result");

}
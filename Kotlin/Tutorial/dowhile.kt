fun main(args: Array<String>) {
    val x = readLine()!!.toInt();
    var y = readLine()!!.toInt();
    var result = x
    do{
        result = result * x;
        y--;
    } while (y > 0);
    println(result);
}
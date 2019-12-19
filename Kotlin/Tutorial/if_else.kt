fun main(args: Array<String>) {
    println("insert a number: ")
    val x = readLine()!!.toInt();

    if (x < 5)  {
        println("$x is less than 5");
    }
    else if (x == 5){
        println("$x is equal to 5");
    } 
    else {
        println("$x is greater than 5");
    }

    println("insert a value for a: ");
    val a = readLine()!!.toInt();
    println("insert a value for b: ");
    val b = readLine()!!.toInt();

    val max = if (a > b) a else b;

    println ("$max is the larger number")
}
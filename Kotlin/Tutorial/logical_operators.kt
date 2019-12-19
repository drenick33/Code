fun main(args: Array<String>) {
    println("insert a number between 0 and 10: ")
    val x = readLine()!!.toInt();

    if(x >= 0  && x <= 10){
        if(x == 0 || x == 2 || x == 4 || x == 6 || x == 8 || x == 10){
            println("x is an even number");
        }
        else{
            println("x is an odd number");
        }
    }
    else{
        println("invalid number :( ");
    }
}
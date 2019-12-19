//this code should print only even numbers
//the second half will print the numbers until it is divisible by 10
fun main(args: Array<String>) {
    println("This program will find all even numbers between two numbers")
    println("Insert the first number: ")
    var x = readLine()!!.toInt();
    println("Insert the second number: ")
    val y = readLine()!!.toInt();

    while (x < y){
        x++;
        if ((x%2) == 0){
            println(x);
            continue;
        }
        else{
            continue;
        }
    }

    do{
        println(x);
        if ((x%10) == 0){
            println("the number rounds down to: $x");
            break;
        }
        x--;
    }while (x > 0);

}
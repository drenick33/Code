fun main(args: Array<String>) {
    println("insert a number between 0 and 999: ")
    var num1 = readLine()!!.toInt();

    when {
        num1 < 0 || num1 > 999 -> println("Your number is invalid");
        num1 < 10 -> println("Your number is one digit");
        num1 >= 10 && num1 < 100 -> println("Your number is two digits");
        num1 >= 100 && num1 < 1000 -> println("Your number is three digits");
        else -> println("You're not supposed to find this ;)")
    }


    //using when as an expression
    println("What grade did you get?");
    var grade = readLine()!!.toInt();
    var result = when {
        grade < 65 -> "failed";
        grade > 65 && grade < 90 -> "passed";
        else -> "awesome";
    }
    println(result);

}
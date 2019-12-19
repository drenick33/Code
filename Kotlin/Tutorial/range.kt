fun main(args: Array<String>) {
    var upRange = 1.rangeTo(10);
    println("This is an example of rangeTo:")
    println(upRange);
    var downRange = 10.downTo(0);
    println("This is an example of downTo:");
    //println(downRange); For some reason this doesn't work
    var myRange = 1..10;
    println("This is an example of using ..:")
    println(myRange);

    if(5 in myRange){ //find if the number is in the range
        println("5 is in the range");
    }

}
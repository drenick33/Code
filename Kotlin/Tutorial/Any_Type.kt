fun printIt(arg: Any){
    if (arg is String){ //Extra step if the passed value is a string
        println("Length is ${arg.length}");
    }
    if (arg is Int){ //Extra step if the passed value is an interger
        println("This is an Interger.")
    }
    println(arg);
} 

fun main(args: Array<String>) {
    printIt("This is a String"); //Pass a String
    printIt(69); //Pass an Interger
}
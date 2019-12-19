/*The initializer block can be used to run code automatically
when an object is created.
To declare an initializer block, the keyword init is used,
followed by curly braces containing the initialization code */

class Student(var name: String, var age: Int){
    init{
        println("This will print first");
    }
    init {
        println("Student: $name");
        println("Age: $age");
    }
}

fun main(args: Array<String>) {
    println("Insert the students name, then their age:");
    var obj = Student(readLine()!!, readLine()!!.toInt());
}
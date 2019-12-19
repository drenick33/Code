//multiple constructors are allowed, seperated by a comma
class User constructor(var name: String, var family: String){ //Use constructor to initialize properties on creation of an object
    fun sayHi(){
        println("Hello $name $family");
    }
}

class Omit (var name2: String){ //constructor can be omitted
    fun sayHey(){
        println("Hey $name2")
    }
}

fun main(args: Array<String>) {
    println("Enter your name, then last name")
    val obj = User(readLine()!!, readLine()!!);
    obj.sayHi()
    println("Enter student name");
    val stu = Omit(readLine()!!);
    stu.sayHey();
}
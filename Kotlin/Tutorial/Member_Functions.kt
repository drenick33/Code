fun main(args: Array<String>) {
    println("What is your name?")
    var name1 = readLine()!!;
    var obj = User();
    obj.name = name1;
    obj.printHello()
}

class User {
    var name: String = "";
    fun printHello(){
        println("Hello $name!");
    }
}
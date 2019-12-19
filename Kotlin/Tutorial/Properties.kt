fun main(args: Array<String>) {
    val obj = User();
    obj.name = "John";
    printUser(obj);
}

fun printUser(x: User){
    println("User name is ${x.name}");
    println("User email is ${x.email}");
    println("User is learning at ${x.learningAt}");
}

class User {
    var name: String = "";
    var email: String = "";
    val learningAt: String = "SoloLearn";
}
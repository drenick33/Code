fun main(args: Array<String>) {
    var str: String? = "This variable is nullable because of the ?"
    str = null;
    println(str?.length); //the ? after str accounts for nullable variables.
}
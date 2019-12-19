fun main(args: Array<String>) {
    val obj = User();
    obj.age = -12 //because of the set statement, is corrected to 0
    obj.printInfo();

    val go1 = GoGetter();
    go1.ages = -2;
    go1.getAge();
    val go2 = GoGetter();
    go2.ages = 0
    go2.getAge();
    val go3 = GoGetter();
    go3.ages = 2
    go3.getAge();
    val go4 = GoGetter();
    go4.getAge();
}

class User{
    var age: Int = 0
        set(value) { //Only sets a new value if age is greater than 0
            if (value > 0) {
                field = value; //field refers to the last set variable
            }
        }
    fun printInfo(){
        println("The user is $age years old.");
    }
}

class GoGetter{
    var ages: Int = 0
        get() {
            return field + 2; //adds 2 to the property (age) whenever it is accessed
        }
    fun getAge(){
        println("The age is: $ages");
    }
}
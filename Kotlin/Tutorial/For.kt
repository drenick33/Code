fun main(args: Array<String>) {
    var myRange = 1..10;
    for(x in myRange){
        println(x)
    }

    var tens = 0..100 step 10
    for (i in tens){
        println(i);
    }
}
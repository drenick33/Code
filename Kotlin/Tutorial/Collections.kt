fun main(args: Array<String>) {
    val numbers: MutableList<Int> = mutableListOf(1, 2, 3); //mutable list
    val readOnlyView: List<Int> = numbers; //immutable list
    println("my mutable list--"+numbers);
    numbers.add(4);
    println("my mutable list after addition --"+numbers);
    println(readOnlyView);
}
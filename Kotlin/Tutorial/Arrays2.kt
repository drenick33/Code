fun main(args: Array<String>) {
    println("What is number 1?")
    val x1 = readLine()!!.toInt();
    println("What is number 2?")
    val x2 = readLine()!!.toInt();
    println("What is number 3?")
    val x3 = readLine()!!.toInt();

    var arr = arrayOf(x1, x2, x3);

    println("number 1 is " + arr[0] + " number 2 is " + arr[1] + " number 3 is " + arr[2]);



    var nums: IntArray = intArrayOf(4, 13, 25, 6, -2);
    println("Printing 1st and last elements of a different array:");
    println(nums[0]);
    println(nums[4]);
}
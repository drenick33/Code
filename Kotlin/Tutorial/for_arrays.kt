fun main(args: Array<String>) {
    var nums: IntArray = intArrayOf(4, 5, -5, -12);
    for (n in nums){
        println("Value: $n");
    }

    //using a while loop to acess array elements
    var nums2: IntArray = intArrayOf(4, 5, -5, 12);
    var index: Int = 0;
    while (index < 4){
        println("Value: ${nums2[index]}")
        ++index;
    }

    /*Using a for loop with an index */

    var nums3: IntArray = intArrayOf(1, 2, 3, -5);
    for (ix in nums3.indices){
        println("Value: ${nums3[ix]}")
    }

}
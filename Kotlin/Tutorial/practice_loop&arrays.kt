fun main(args: Array<String>) {
   //Find the sum of 5 numbers using arrays
    var nums: IntArray = intArrayOf(0, 0, 0, 0, 0)
    var index = 0
    while(index < 5)
    {
        println("Please insert number " + (index + 1));
        nums[index] = readLine()!!.toInt();
        index++
    }

    var sum: Int = 0
    for(num in nums)
    {
        sum +=num;
    }
    
    println("The sum equals $sum");



    //Find the even numbers from 5 given ones

    var nums2: IntArray = intArrayOf(0, 0, 0, 0, 0)
    var index2 = 0
    while(index2 < 5)
    {
        println("Please insert number " + (index2 + 1))
        nums2[index2] = readLine()!!.toInt()
        index2++
    }

    var x = 0
    println("The even numbers are: ")
    
    while(x < 5)
    {
        if(nums2[x] % 2 == 0)
        {
            print(nums2[x]);
            if(x == 4)
            {
                print(".")
            }
            else
            {
                print(", ")
            }

        }
        x++
    }


}
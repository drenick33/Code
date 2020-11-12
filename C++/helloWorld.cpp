#include <iostream> //Provides cout | the pre-processor takes this and puts it into our code and makes it available before it compiles

//using namespace std; //declarative, sets the entire namespace as std (standard)
//using std::cout; like the above, but only applies for the cout object
//^The above is only available to the function in which it is called if it is placed in a function
//^But it is global if it is called on the top of the file

int main() //main function | You always have one | first function called | int is the return type
{
    std::cout << "Hello World\n"; //Write to the console | std = standard | << outputs to console
    return 0; //Optional | This means went great | return EXIT_SUCCESS
}

/*std - namespace
 * namespace is a grouping of code | Organize Code
 * prevents conflicts when functions have the same name
 * avoids naming conflicts (std::cout - bill::cout)
 *
 *Alows us to group our code, and prevent naming conflicts
 *Puts code into their own containers
 
 can say
 	using namespace std;
	cout << Hello World
can make life easier, but bad practice due to naming conflicts
Let's get used to prefixing
 */

/*cout - Object oriented programming
 *cout is actually an object
 *cout described the console output | tool to reach the console
 *Objects are birthed from classes
 *Classes can have multiple objects
 *
 * A class describes the structure of an object
 *
 *cout is from the Class ostream
 */

/*<< - Operator
 * Work on operands (in _5 + _5; _5 is the operand)
 *In this case cout & Hello World are operands
 *<< gives the data on the right and gives it to the object on the left (cout)
*/

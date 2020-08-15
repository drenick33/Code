/*NEW PATCH ROUTE FOR CHANGING ARRAY ORDER
### NEED TO FINISH
###
###
*/

// router.put('/:ToDoID', (req, res, next) => {
//   const id = req.params.ToDoID; //Constant that stores the ToDoID accessed
//   ToDo.find() //get All ToDos
//     .exec()
//     .then((doc) => {
//       console.log('From database', doc);
//       let index = 100;
//       if (doc) {
//         for (i = 0, len = doc.length; i < len; i++) {
//           if (id == doc[i]._id) {
//             index = i; //FIND THE INDEX OF THE PARAM GIVEN
//           }
//         }
//         const newArray = arrayMove(doc, index, index - 1);
//         doc = newArray;
//         doc.save.res.status(200).json({
//           message: index,
//           before: doc,
//           after: newArray,
//         }); //If this runs, the GET works
//       } else {
//         res.status(404).json({ message: 'ID not found' }); //If there's no error, but ID isn't found
//       }
//     })
//     .catch((err) => {
//       //If the code fails
//       console.log(err);
//       res.status(500).json({ error: err });
//     });
// }); //doesn't need to be /todos, since you'll already be in /todos when accessing

// /*NEW PATCH ROUTE FOR CHANGING ARRAY ORDER
// ###
// ###
// ###
// */

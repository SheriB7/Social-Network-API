const router = require('express').Router();
const {
  getAllUsers,
  getSingleUserById,
  newUser,
  updateUserById,
  // addFriend,
  deleteUserById
} = require('../../controllers/userController');

// /api/users
router.route('/')
.get(getAllUsers)
.get(getSingleUserById)
.post(newUser);
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

// /api/users/:id
router.route('/:id')
.put(updateUserById)
.delete(deleteUserById)

module.exports = router;


//api/userId/friends
// router.route('/:id')
// .put(addFriend)
// .delete(deleteFriend)

//api/thought
// router.route()
// .get(getAllThoughts)
// .get(getSingleThoughtById)
// .post(createThoughtsById) //this needs to be an array
// example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }




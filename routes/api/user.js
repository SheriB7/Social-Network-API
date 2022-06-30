const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users
router.route("/").get(getAllUsers).post(createUser);
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

// /api/users/:id
router.route("/:id")
.put(updateUserById)
.get(getUserById)
.delete(deleteUserById);

// api/userId/friends
router.route("/:id/friends")
.post(addFriend)
.delete(deleteFriend);

module.exports = router;

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

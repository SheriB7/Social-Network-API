const router = require("express").Router();
const {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  createFriend,
  deleteFriend,
} = require("../../controllers/userController");

// /api/users  get all users
router.route("/")
.get(getAllUsers)
.post(createUser);
// {
//   "username": "lernantino",
//   "email": "lernantino@gmail.com"
// }

// /api/users/:id   (put - get - delete route)
router.route("/:id")
.put(updateUserById)
.get(getUserById)
.delete(deleteUserById);

// api/userId/friends
router.route("/:id/friends")
.put(createFriend)
router.route("/:id/friends/:friendId")
.delete(deleteFriend);

module.exports = router;



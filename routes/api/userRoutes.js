const router = require('express').Router();
const {
  getAllUsers,
  getSingleUserById,
  newUser,
  updateUserById,
  addFriend,
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

//api/userId/friends
// router.route('/:id')
// .put(addFriend)
// .delete(deleteFriend)



module.exports = router;

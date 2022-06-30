const { User, Thought } = require('../models');


const userController = {
  // GET all users
  getAllUsers(req, res) {
    User.find({}).populate({
      path: "friends",
      select: "-__v",
    })
      .select("-__v")
      .sort({ _id: -1 })
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err); //is it res.sendStatus(400)?
      });
  },
  //GET one user  api/users/:id
  getUserById({ params }, res) {
    User.findOne({ _id: params.id })
      .populate([
        { path: 'thoughts', select: "-__v" },
        { path: 'friends', select: "-__v" }
      ])
      .select('-__v')
      .then(dbUserData => {
        if (!dbUserData) {
          res.status(404).json({ message: 'No user found with this id' });
          return;
        }
        res.json(dbUserData);
      })
      .catch(err => {
        console.log(err);
        res.status(400).json(err);
      });
  },

  // CREATE user
  createUser({ body }, res) {
    User.create(body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.json(err));
  },

  // UPDATE user by id
  updateUserById({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.id }, body, {
      new: true,
      runValidators: true,
    })
      .then((dbUserData) => {
        if (!dbUserData) {
          res.status(404).json({ message: "No user found with this id!" });
          return;
        }
        res.json(dbUserData);
      })
      .catch((err) => res.json(err));
  },

  // delete user
  deleteUserById({ params }, res) {
    User.findOneAndDelete({ _id: params.id })
      .then((dbUserData) => {
        if (!dbUserData) {
          return res.status(404).json({ message: "No user with this id!" });
        }
      })
    },

    // add friend
    addFriend({ params }, res) {
      User.findOneAndUpdate([
        { _id: params.userId },
        {$addToSet: { friends: params.friendId }},
        { new: true, runValidators: true }
      ])
      .then((dbUserData) => {
          if (!dbUserData) {
            res.status(404).json({ message: "No user with this id" });
            return;
          }
          res.json(dbUserData);
        })
    .catch((err) => res.json(err));
    },
  

// delete friend
deleteFriend({ params }, res) {
  User.findOneAndUpdate([
    { _id: params.userId },
    { $pull: { friends: params.friendId } },
    { new: true }
  ])  
  .then((dbUserData) => {
      if (!dbUserData) {
        return res.status(404).json({ message: "No user with this id!" });
      }
      res.json(dbUserData);
    })
    .catch((err) => res.json(err));

  },
};

module.exports = userController;



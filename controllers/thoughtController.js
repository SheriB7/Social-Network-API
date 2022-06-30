const { User, Thought } = require("../models");

const thoughtController = {
  //GET api thoughts
  getAllThoughts(req, res) {
    Thought.find({})
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((dbThoughtData) => res.json(dbThoughtData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  // GET /api/thoughts/:id
  getThoughtById({ params }, res) {
    Thought.findOne({ _id: params.id })
      .populate({ path: "reactions", select: "-__v" })
      .select("-__v")
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      // User.create(
      //   { _id: body.userId },
      //   { $push: { thoughts: dbThoughtData._id } },
      //   { new: true }
      // )
      //   .then(dbUserData => {
      //     if (!dbUserData) {
      //       res.status(404).json({ message: 'No user found with this id' });
      //       return;
      //     }
      //     res.json(dbUserData);
      //   })
      //     .catch(err => res.json(err));
      // })
      .catch((err) => res.status(400).json(err));
  },
  //update thought
  updateThoughtById({ params, body }, res) {
    Thought.findOneAndUpdate({ _id: params.id }, body, { new: true })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id" });
          return;
        }
        res.json(dbThoughtData);
      })
      .catch((err) => res.status(400).json(err));
  },
  // DELETE /api/thoughts/:id
  deleteThoughtById({ params }, res) {
    // Delete thought
    Thought.findOneAndDelete({ _id: params.id })
      .then((dbThoughtData) => {
        if (!dbThoughtData) {
          res.status(404).json({ message: "No thought found with this id" });
          return;
        }
        // Delete the reference to deleted thought in user's thought array
        User.findOneAndUpdate(
          { username: dbThoughtData.username },
          { $pull: { thoughts: params.id } }
        )
          .then(() => {
            res.json({ message: "Successfully deleted the thought" });
          })
          .catch((err) => res.status(500).json(err));
      })
      .catch((err) => res.status(500).json(err));
  },
  createReaction(req, res) {
    console.log("You added a reaction!")
    console.log(req.body);
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId},
      { $addToSet: { reactions: req.body}},
      {runValidators: true, new: true}
    )
    .then((thought) => 
    !thought
    ? res .status(404).json({message: "No thoughts found with this Id :(" })
    :res.json(thought)
    )
    .catch((err) => res.status(400).json(err));
  },


  //   Reaction.create(body)
  //     .then((reactionId) => {
  //       User.findOneAndUpdate(
  //         { _id: params.thoughtId },
  //         { $push: { reactions: params.reactionId } },
  //         { new: true }
  //       )
  //         .then((dbUserData) => {
  //           if (!dbUserData) {
  //             res.status(404).json({ message: "No thoughts found with this id" });
  //             return;
  //           }
  //           res.json(dbUserData);
  //         })
  //         .catch((err) => res.json(err));
  //     })
  //     .catch((err) => res.status(400).json(err));
  // },
  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No reaction found with that ID :(" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};


module.exports = thoughtController;



//     Reaction.findOneAndUpdate(
//       { _id: params.reactionId },
//       { $pull: { reactions: { reactionId: params.reactionId } } },
//       { new: true, runValidators: true }
//     )
//       .then((ReactionData) => {
//         if (!ReactionData) {
//           res.status(404).json({ message: "No reaction found with this id" });
//           return;
//         }
//         res.json({ message: "Successfully deleted the reaction" });
//       })
//       .catch((err) => res.status(500).json(err));
//   },
// };


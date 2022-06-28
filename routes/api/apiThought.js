const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  // addReaction,
  // deleteReaction  
} = require('../../controllers/ThoughtController');

// /api/Thoughts
router.route('/')
.get(getAllThoughts)
.get(getThoughtById)
.post(createThought)

router.route('/:id')
.put(updateThoughtById)
.delete(deleteThoughtById);


// router.route('/:thoughtId/reactions/')
//     .post(addReaction)
//     .delete(deleteReaction)

module.exports = router;

// /api/thoughts/:thoughtId/reactions
// * `POST` to create a reaction stored in a single thought's `reactions` array field
// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value -->





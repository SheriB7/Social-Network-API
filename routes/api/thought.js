const router = require('express').Router();
const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  createReaction,
  deleteReaction  
} = require('../../controllers/thoughtController');

// /api/Thoughts
router.route('/')
.get(getAllThoughts)
.post(createThought)

router.route('/:id')
.get(getThoughtById)
.put(updateThoughtById)
.delete(deleteThoughtById);

router.route('/:thoughtId/reaction/')
.post(createReaction);
router.route('/:thoughtId/reaction/:reactionId')
.delete(deleteReaction); 

// /api/thoughts/:thoughtId/reactions
// * `POST` to create a reaction stored in a single thought's `reactions` array field
// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value -->
// router.route('/:thoughtId/reactions/')
//     .post(createReaction)
//     .delete(deleteReaction)

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




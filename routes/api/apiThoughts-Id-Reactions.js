// <!-- **`/api/thoughts/:thoughtId/reactions`**
const router = require('express').Router();
const {
    createReaction,
    deleteReactionById,
} = require('../../controllers/ThoughtController');

// /api/thoughts/:thoughtId/reactions
// * `POST` to create a reaction stored in a single thought's `reactions` array field
router.route('/')
.post(createReaction)
// * `DELETE` to pull and remove a reaction by the reaction's `reactionId` value -->
.delete(deleteReactionById);

module.exports = router;


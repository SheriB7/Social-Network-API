const router = require('express').Router();
const thoughtRoutes = require('./thoughtRoutes');
const userRoutes = require('./user');

router.use('/thoughts', thoughtRoutes);
router.use('/users', userRoutes);

module.exports = router;

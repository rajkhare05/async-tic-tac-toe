const router = require('express').Router();
const controller = require('../controllers/game.js');

// GET /all (all games)
router.get('/all', controller.getAllGames);

// POST /new (new game)
router.post('/new', controller.newGame);

router.route('/:gameID')
    // GET /:gameID (get a game)
    .get(controller.getGame)
    // PATCH /:gameID (update a game)
    .patch(controller.updateGame);

module.exports = router;

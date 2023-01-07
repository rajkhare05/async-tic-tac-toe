const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    // player 1 (p1 is always the initiator of the game)
    player1: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },

    // player 2 (It can be an opponent or the current player itself)
    player2: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },

    // 3x3 grid/board of the game
    // 0 : empty cells of grid
    // 1 : player1's piece mark (X)
    // 2 : player2's piece mark (O)
    grid: {
        type: [[Number]],
        default: [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
        required: true
    },

    // status of the game
    // p1p : "player 1 pending" => Player1's turn
    // p2p : "player 2 pending" => Player2's turn
    // p1w : "player 1 won"     => Player1 won
    // p2w : "player 2 won"     => Player2 won
    // draw: "game draw"        => None of the players won
    status: {
        type: String,
        default: 'p1p'
    }

}, { timestamps: true });

const gameModel = mongoose.model('games', gameSchema);

module.exports = gameModel;

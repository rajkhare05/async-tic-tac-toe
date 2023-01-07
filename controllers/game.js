const userMod = require('../models/user.js');
const gameMod = require('../models/game.js');

const getAllGames = async (req, res) => {
    try {
        const playerID = req.body.playerID;
        const games = await gameMod.find({ $or: [{ player1: playerID }, { player2: playerID }]});

        if (games.length > 0) {
            res.json(games);
        }
        res.status(404).json({ message: 'No games played till now!' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong!' });
    }
}

const getGame = async (req, res) => {
    try {
        const game = await gameMod.findById(req.params.gameID);
        if (game) return res.json(game);
        res.json({ message: 'Game not found!' });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong!' });
    }
}

const newGame = async (req, res) => {
    try {
        const gameData = req.body;
        const player2 = await userMod.findOne({ email: gameData.player2email });

        if (player2 == null) {
            res.status(404).json({ message: 'No player found with this email!' });
        }

        const game = await gameMod.create({
            player1: gameData.player1ID,
            player2: player2._id
        });

        res.json({ message: 'Game created & started!', game });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong!' });
    }

}

const updateGame = async (req, res) => {
    try {
        const { gameID } = req.params;
        const { playerID, position } = req.body;
        const game = await gameMod.findById(gameID);

        let piece; // 1/2 for p1/p2 (X/O)

        if (playerID === game.player1) piece = 1;
        else piece = 2;

        // let grid = game.grid;
        // grid[position[0]][position[1]] = piece;

        // 1. update grid
        // await game.updateOne({ $set: { grid: grid }});
        await game.updateOne({ $set: { [`grid.${position[0]}.${position[1]}`]: piece }});
        
        // 2. Check if the player won or not or is it a draw
        // then update game status
        const g = checkGame(game.grid, piece);
        
        if (g.pair == piece) {
            await game.updateOne({ status: `p${piece}w` });

        } else {
            if (!g.emptyCells) {
                await game.updateOne({ status: 'draw' });

            } else {
                if (piece == game.player1) piece = 2;
                else piece = 1;
                await game.updateOne({ status: `p${piece}p` });
            }
        }
        res.status(201).json(game);
        
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong!' });
    }
}

function checkGame(grid, piece) {
    const result = { emptyCells: true, pair: -1 };

    let rowCell = 0;
    let columnCell = 0;
    let diagonal1Cell = 0 // left top to right bottom
    let diagonal2Cell = 0 // right top to left bottom
    let emptyCells = 0;

    for (let i = 0; i < 3; i++) {

        for (let j = 0; j < 3; j++) {
            if (grid[i][j] == 0) emptyCells++;

            // for row 'i'
            if (piece == grid[i][j]) rowCell++;

            // for column 'j'
            if (piece == grid[j][i]) columnCell++;

            // left top to right bottom diagonal
            if (i == j && piece == grid[i][j]) diagonal1Cell++;
            
        }
        // right top to left bottom diagonal
        if (piece == grid[i][j - i - 1]) diagonal2Cell++;

        if (rowCell == 3 || columnCell == 3 || diagonal1Cell == 3 || diagonal2Cell == 3) {
            result.pair = piece;
        }

        row = 0;
        column = 0;
    }

    if (emptyCells == 0) result.emptyCells == false;

    return result;
}

module.exports = { getAllGames, getGame, newGame, updateGame };

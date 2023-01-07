const userMod = require('../models/user.js');

const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await userMod.findOne({ username });

        if (user) {
            if (password === user.password) {
                return res.json({ message: 'Logged in successfully!' });
            }

            return res.status(400).json({ message: 'Incorrect password!' });
        }

        return res.status(404).json({ message: 'User does not exist with that username' });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Something went wrong!' });
    }
}

module.exports = { login };

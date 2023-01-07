const userMod = require('../models/user.js');

const registration = async (req, res) => {
    try {
        const { username, email } = req.body;
        const user = await userMod.findOne({ $or: [{ username }, { email }]});

        if (user) {
            if (username === user.username && email === user.email) {
                return res.status(400).json({ message: 'username and email already in use!' });

            } else if (username === user.username) {
                return res.status(400).json({ message: 'username already in use!' });

            } else if (email === user.email) {
                return res.status(400).json({ message: 'email already in use!' });
            }
        }
        const newUser = await userMod.create(req.body);

        return res.status(201).json({ message: 'Registered successfully!', id: newUser._id });

    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Something went wrong!' });
    }
}

module.exports = { registration };

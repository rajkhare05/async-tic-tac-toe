const express = require('express');
const cors = require('cors');
const sessions = require('express-session');
const dotenv = require('dotenv');
const { EXPRESS_PORT } = require('./config');
require('./config/mongoose.js');

const registrationRoute = require('./routes/registration.js');
const loginRoute = require('./routes/login.js');
const gameRoute = require('./routes/game.js');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sessions({
  secret: 'someSecret',
  saveUninitialized: true,
  resave: false
}));

app.get('/', (req, res) => {
  res.send('SERVER UP!');
});

// Register
app.use('/registration', registrationRoute);

// Login
app.use('/login', loginRoute);

// Game
app.use('/game', gameRoute);

app.listen(EXPRESS_PORT, () => {
  console.log(`Listening on port ${EXPRESS_PORT}`);
});

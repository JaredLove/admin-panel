const path = require('path');
const express = require('express');
const session = require('express-session');


// instantiate the server
// We assign the express() function to the app variable so that we can later chain on methods to the Express.js server. This essentially saves us from writing the same code over and over again.
const app = express();
const PORT = 3001;


const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
    secret: 'Super secret secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize
    })
  };

// turn on sessions
app.use(session(sess));
// parse incoming JSON data
app.use(express.json());
// parse incoming string or array data
app.use(express.urlencoded({ extended: false }));
// serve up static files
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
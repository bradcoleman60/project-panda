//Requiring dependencies
const express = require('express');
const path = require('path');
const sequelize = require('./config/connection');

const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const helpers = require('./utils/helpers');

// Set up our app to use express
const app = express()
const PORT = process.env.PORT || 3001;

// Set up sessions with cookies
const sess = {
  secret: 'Project Panda',
  cookie: {
    maxAge: 1000 * 60 * 60,
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.get("/public/JS/input-tech.js", function (req, res) {
  res.set("Content-Type", "text/javascript");
  res.sendFile(__dirname + "/public/JS/input-tech.js");
});

app.use(session(sess));

const hbs = exphbs.create({ helpers:  helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}`
    )
  );
});
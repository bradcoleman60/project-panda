const Technology1 = require("../models/Technologies1");

const techData1 = [
  {
    category: "Databases",
    name: "MySQL",
    url: "https://www.mysql.com/",
    badge:
      "https://img.shields.io/badge/MySQL-v8.0.24-4479A1?logo=MySQL&style=flat-square",
  },

  {
    category: "Databases",
    name: "PostgreSQL",
    url: "https://www.postgresql.org/",
    badge:
      "https://img.shields.io/badge/PostgreSQL-v15-336791?logo=PostgreSQL&style=flat-square",
  },

  {
    category: "Databases",
    name: "MongoDB",
    url: "https://www.mongodb.com/",
    badge:
      "https://img.shields.io/badge/MongoDB-v5.3-47A248?logo=MongoDB&style=flat-square",
  },

  {
    category: "Databases",
    name: "Microsoft SQL Server",
    url: "https://www.microsoft.com/en-us/sql-server/sql-server-downloads",
    badge:
      "https://img.shields.io/badge/Microsoft%20SQL%20Server-v2022-00072C?logo=Microsoft%20SQL%20Server&style=flat-square",
  },
  {
    category: "Databases",
    name: "Oracle Databases",
    url: "https://www.oracle.com/Databases/",
    badge:
      "https://img.shields.io/badge/Oracle%20Databases-v20c-F80000?logo=Oracle%20Databases&style=flat-square",
  },

  {
    name: "Node.js",
    category: "Server",
    badge:
      "https://img.shields.io/badge/Node.js-v15.9.0-339933?logo=Node.js&style=flat-square",
    url: "https://nodejs.org/",
  },
  {
    name: "Express",
    category: "Server",
    badge:
      "https://img.shields.io/badge/Express-v4.17.1-191919?logo=express&style=flat-square",
    url: "https://expressjs.com/",
  },
  {
    name: "Ruby on Rails",
    category: "Server",
    badge:
      "https://img.shields.io/badge/Ruby%20on%20Rails-v7.0-CC0000?logo=Ruby%20on%20Rails&style=flat-square",
    url: "https://rubyonrails.org/",
  },
  {
    name: "Django",
    category: "Server",
    badge:
      "https://img.shields.io/badge/Django-v4.2-092E20?logo=Django&style=flat-square",
    url: "https://www.djangoproject.com/",
  },
  {
    name: "Flask",
    category: "Server",
    badge:
      "https://img.shields.io/badge/Flask-v2.1.1-000000?logo=Flask&style=flat-square",
    url: "https://flask.palletsprojects.com/",
  },
  {
    name: "Laravel",
    category: "Server",
    badge:
      "https://img.shields.io/badge/Laravel-v9.0-F55247?logo=Laravel&style=flat-square",
    url: "https://laravel.com/",
  },
  
  {
    name: "React",
    category: "JavaScript",
    url: "https://reactjs.org/",
    badge: "https://img.shields.io/npm/v/react?label=React",
  },
  {
    name: "Vue.js",
    category: "JavaScript",
    url: "https://vuejs.org/",
    badge: "https://img.shields.io/npm/v/vue?label=Vue.js",
  },
  {
    name: "Angular",
    category: "JavaScript",
    url: "https://angular.io/",
    badge: "https://img.shields.io/npm/v/@angular/core?label=Angular",
  },
  {
    name: "Ember.js",
    category: "JavaScript",
    url: "https://emberjs.com/",
    badge: "https://img.shields.io/npm/v/ember-cli?label=Ember.js",
  },
  {
    name: "Backbone.js",
    category: "JavaScript",
    url: "http://backbonejs.org/",
    badge: "https://img.shields.io/npm/v/backbone?label=Backbone.js",
  },

  {
    name: "Bootstrap",
    category: "CSS",
    url: "https://getbootstrap.com/",
    badge: "https://img.shields.io/npm/v/bootstrap?label=Bootstrap",
  },
  {
    name: "Materialize",
    category: "CSS",
    url: "https://materializecss.com/",
    badge:
      "https://img.shields.io/npm/v/materialize-css?label=Materialize",
  },
  {
    name: "Foundation",
    category: "CSS",
    url: "https://foundation.zurb.com/",
    badge:
      "https://img.shields.io/npm/v/foundation-sites?label=Foundation",
  },
  {
    name: "Semantic UI",
    category: "CSS",
    url: "https://semantic-ui.com/",
    badge:
      "https://img.shields.io/npm/v/semantic-ui-css?label=Semantic%20UI",
  },
  {
    name: "Tailwind CSS",
    category: "CSS",
    url: "https://tailwindcss.com/",
    badge: "https://img.shields.io/npm/v/tailwindcss?label=Tailwind%20CSS",
  },
  {
    name: "Bulma",
    category: "CSS",
    url: "https://bulma.io/",
    badge: "https://img.shields.io/npm/v/bulma?label=Bulma",
  },

  {
    name: "React",
    category: "React",
    url: "https://reactjs.org/",
    badge: "https://img.shields.io/npm/v/react?label=React",
  },
  {
    name: "React Router",
    category: "React",
    url: "https://reactrouter.com/",
    badge:
      "https://img.shields.io/npm/v/react-router?label=React%20Router",
  },
  {
    name: "React Redux",
    category: "React",
    url: "https://react-redux.js.org/",
    badge: "https://img.shields.io/npm/v/react-redux?label=React%20Redux",
  },
  {
    name: "Reactstrap",
    category: "React",
    url: "https://reactstrap.github.io/",
    badge: "https://img.shields.io/npm/v/reactstrap?label=Reactstrap",
  },
  {
    name: "React Native",
    category: "React",
    url: "https://reactnative.dev/",
    badge:
      "https://img.shields.io/npm/v/react-native?label=React%20Native",
  },
  {
    name: "Next.js",
    category: "React",
    url: "https://nextjs.org/",
    badge: "https://img.shields.io/npm/v/next?label=Next.js",
  },
  {
    name: "Gatsby",
    category: "React",
    url: "https://www.gatsbyjs.org/",
    badge: "https://img.shields.io/npm/v/gatsby?label=Gatsby",
  },

  {
    name: "React",
    category: "React",
    url: "https://reactjs.org/",
    badge: "https://img.shields.io/npm/v/react?label=React",
  },
  {
    name: "React Router",
    category: "React",
    url: "https://reactrouter.com/",
    badge:
      "https://img.shields.io/npm/v/react-router?label=React%20Router",
  },
  {
    name: "React Redux",
    category: "React",
    url: "https://redux.js.org/basics/usage-with-react",
    badge: "https://img.shields.io/npm/v/react-redux?label=React%20Redux",
  },
  {
    name: "React Bootstrap",
    category: "React",
    url: "https://react-bootstrap.github.io/",
    badge:
      "https://img.shields.io/npm/v/react-bootstrap?label=React%20Bootstrap",
  },
  {
    name: "React Native",
    category: "React",
    url: "https://reactnative.dev/",
    badge:
      "https://img.shields.io/npm/v/react-native?label=React%20Native",
  },
  {
    name: "React Testing Library",
    category: "React",
    url: "https://testing-library.com/docs/react-testing-library/intro",
    badge:
      "https://img.shields.io/npm/v/@testing-library/react?label=React%20Testing%20Library",
  },
  {
    name: "Next.js",
    category: "React",
    url: "https://nextjs.org/",
    badge: "https://img.shields.io/npm/v/next?label=Next.js",
  },

  {
    name: "Node.js",
    category: "Node",
    url: "https://nodejs.org/",
    badge: "https://img.shields.io/badge/node.js-%3E%3D12.0.0-brightgreen",
  },
  {
    name: "Express",
    category: "Node",
    url: "https://expressjs.com/",
    badge: "https://img.shields.io/npm/v/express?label=Express",
  },
  {
    name: "Nodemon",
    category: "Node",
    url: "https://nodemon.io/",
    badge: "https://img.shields.io/npm/v/nodemon?label=Nodemon",
  },
  {
    name: "PM2",
    category: "Node",
    url: "https://pm2.io/",
    badge: "https://img.shields.io/npm/v/pm2?label=PM2",
  },
  {
    name: "Mongoose",
    category: "Node",
    url: "https://mongoosejs.com/",
    badge: "https://img.shields.io/npm/v/mongoose?label=Mongoose",
  },
  {
    name: "Bcrypt",
    category: "Node",
    url: "https://www.npmjs.com/package/bcrypt",
    badge: "https://img.shields.io/npm/v/bcrypt?label=Bcrypt",
  },
  {
    name: "JSON Web Token (JWT)",
    category: "Node",
    url: "https://jwt.io/",
    badge:
      "https://img.shields.io/npm/v/jsonwebtoken?label=JSON%20Web%20Token%20(JWT)",
  },

  {
    name: "NPM",
    category: "Node",
    url: "https://www.npmjs.com/",
    badge: "https://img.shields.io/npm/v/npm?label=npm",
  },
  {
    name: "Express",
    category: "Node",
    url: "https://expressjs.com/",
    badge: "https://img.shields.io/npm/v/express?label=Express",
  },
  {
    name: "React",
    category: "Node",
    url: "https://reactjs.org/",
    badge: "https://img.shields.io/npm/v/react?label=React",
  },
  {
    name: "React Native",
    category: "Node",
    url: "https://reactnative.dev/",
    badge:
      "https://img.shields.io/npm/v/react-native?label=React%20Native",
  },
  {
    name: "Lodash",
    category: "Node",
    url: "https://lodash.com/",
    badge: "https://img.shields.io/npm/v/lodash?label=Lodash",
  },
  {
    name: "Moment.js",
    category: "Node",
    url: "https://momentjs.com/",
    badge: "https://img.shields.io/npm/v/moment?label=Moment.js",
  },
  {
    name: "Mongoose",
    category: "Node",
    url: "https://mongoosejs.com/",
    badge: "https://img.shields.io/npm/v/mongoose?label=Mongoose",
  },

  {
    name: "jQuery",
    category: "JavaScript",
    url: "https://jquery.com/",
    badge: "https://img.shields.io/npm/v/jquery?label=jQuery",
  },
  {
    name: "jQuery UI",
    category: "JavaScript",
    url: "https://jqueryui.com/",
    badge: "https://img.shields.io/npm/v/jquery-ui?label=jQuery%20UI",
  },
  {
    name: "jQuery Validation",
    category: "JavaScript",
    url: "https://jqueryvalidation.org/",
    badge:
      "https://img.shields.io/npm/v/jquery-validation?label=jQuery%20Validation",
  },
  {
    name: "jQuery Mobile",
    category: "JavaScript",
    url: "https://jquerymobile.com/",
    badge:
      "https://img.shields.io/npm/v/jquery-mobile?label=jQuery%20Mobile",
  },
  {
    name: "jQuery Easing",
    category: "JavaScript",
    url: "https://gsgd.co.uk/sandbox/jquery/easing/",
    badge:
      "https://img.shields.io/npm/v/jquery-easing?label=jQuery%20Easing",
  },
  {
    name: "jQuery Cookie",
    category: "JavaScript",
    url: "https://github.com/carhartl/jquery-cookie",
    badge:
      "https://img.shields.io/npm/v/jquery-cookie?label=jQuery%20Cookie",
  },

  {
    name: "Sequelize",
    category: "Databases",
    url: "https://sequelize.org/",
    badge: "https://img.shields.io/npm/v/sequelize?label=Sequelize",
  },
  {
    name: "Sequelize-cli",
    category: "Databases",
    url: "https://github.com/sequelize/cli",
    badge:
      "https://img.shields.io/npm/v/sequelize-cli?label=Sequelize-cli",
  },
  {
    name: "Sequelize-auto",
    category: "Databases",
    url: "https://github.com/sequelize/sequelize-auto",
    badge:
      "https://img.shields.io/npm/v/sequelize-auto?label=Sequelize-auto",
  },
  {
    name: "Sequelize-fixtures",
    category: "Databases",
    url: "https://github.com/Z programmin/sequelize-fixtures",
    badge:
      "https://img.shields.io/npm/v/sequelize-fixtures?label=Sequelize-fixtures",
  },
  {
    name: "Sequelize-cursor-pagination",
    category: "Databases",
    url: "https://github.com/oliver-minh/sequelize-cursor-pagination",
    badge:
      "https://img.shields.io/npm/v/sequelize-cursor-pagination?label=Sequelize-cursor-pagination",
  },
  {
    name: "Sequelize-pagination",
    category: "Databasess",
    url: "https://github.com/lgaticaq/sequelize-pagination",
    badge:
      "https://img.shields.io/npm/v/sequelize-pagination?label=Sequelize-pagination",
  },
];

const seedTech1 = () => Technology1.bulkCreate(techData1);

module.exports = seedTech1;

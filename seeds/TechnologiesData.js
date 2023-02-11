const Technology = require("../models/Technologies");

const techData = [
    {
      name: "Node.js",
      url: "https://nodejs.org/",
      badge: "https://img.shields.io/badge/Node.js-v14.16.0-339933?logo=Node.js&style=flat-square",
    },
    { 
      name: "Express",
      url: "https://expressjs.com/",
      badge: "https://img.shields.io/badge/Express-v4.17.1-191919?logo=express&style=flat-square",
    },
    {
      name: "Django",
      url: "https://www.djangoproject.com/",
      badge: "https://img.shields.io/badge/Django-v3.2.7-092E20?logo=django&style=flat-square",
    },
    {
      name: "Ruby on Rails",
      url: "https://rubyonrails.org/",
      badge:"https://img.shields.io/badge/Ruby%20on%20Rails-v7.1.1-CC0000?logo=ruby&style=flat-square",
    },
    {
      name: "Laravel",
      url: "https://laravel.com/",
      badge: "https://img.shields.io/badge/Laravel-v9.1.1-ff2d20?logo=laravel&style=flat-square",
    },
    {
      name: "Spring",
      url: "https://spring.io/",
      badge: "https://img.shields.io/badge/Spring-v5.4.1-6DB33F?logo=spring&style=flat-square",
    },
  
    {
      name: "React",
      url: "https://reactjs.org/",
      badge: "https://img.shields.io/badge/React-v17.0.1-61DAFB?logo=React&style=flat-square",
    },
    {
      name: "Angular",
      url: "https://angular.io/",
      badge: "https://img.shields.io/badge/Angular-v11.0.8-DD0031?logo=Angular&style=flat-square",
    },
    {
      name: "Vue.js",
      url: "https://vuejs.org/",
      badge: "https://img.shields.io/badge/Vue.js-v3.0.15-4FC08D?logo=Vue.js&style=flat-square",
    },
   {
      name: "Backbone.js",
      url: "https://backbonejs.org/",
      badge: "https://img.shields.io/badge/Backbone.js-v1.4.0-F16E20?logo=Backbone.js&style=flat-square",
    },
    {
      name: "Ember.js",
      url: "https://emberjs.com/",
      badge: "https://img.shields.io/badge/Ember.js-v4.18.0-FECE44?logo=Ember.js&style=flat-square",
    },
    
    {
      name: "Axios",
      url: "https://npmjs.com/package/axios",
      badge: "https://img.shields.io/npm/v/axios.svg",
    },
    {
      name: "Lodash",
      url: "https://npmjs.com/package/lodash",
      badge: "https://img.shields.io/npm/v/lodash.svg",
    },
    {
      name: "Moment",
      url: "https://npmjs.com/package/moment",
      badge: "https://img.shields.io/npm/v/moment.svg",
    },
    {
      name: "React Router",
      url: "https://npmjs.com/package/react-router",
      badge: "https://img.shields.io/npm/v/react-router.svg",
    },
    {
      name: "Redux",
      url: "https://npmjs.com/package/redux",
      badge: "https://img.shields.io/npm/v/redux.svg",
    },
    {
      name: "Webpack",
      url: "https://npmjs.com/package/webpack",
      badge: "https://img.shields.io/npm/v/webpack.svg",
    },
    {
      name: "Babel",
      url: "https://npmjs.com/package/babel",
      badge: "https://img.shields.io/npm/v/babel.svg",
    },
    {
      name: "Jest",
      url: "https://npmjs.com/package/jest",
      badge: "https://img.shields.io/npm/v/jest.svg",
    },
  
    {
      name: "Bootstrap",
      url: "https://getbootstrap.com/",
      badge: "https://img.shields.io/badge/Bootstrap-v4.5.3-563D7C?logo=Bootstrap&style=flat-square",
    },
    {
        name: "Materialize",
      url: "https://materializecss.com/",
      badge: "https://img.shields.io/badge/Materialize-v1.0.0-3e5e9a?logo=Materialize&style=flat-square",
    },
    {
        name: "Bulma",
      url: "https://bulma.io/",
      badge: "https://img.shields.io/badge/Bulma-v0.10.2-00D1B2?logo=bulma&style=flat-square'",
    },
    {
        name: "Semantic UI",
      url: "https://semantic-ui.com/",
      badge: "https://img.shields.io/badge/Semantic%20UI-v2.4.1-E03997?logo=Semantic%20UI&style=flat-square'",
    },
    {
        name: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      badge: "https://img.shields.io/badge/Tailwind-v2.2-38B2AC?logo=tailwindcss&style=flat-square'",
    },
  
    {
      name: "jQuery",
      url: "https://jquery.com/",
      badge: "https://img.shields.io/badge/jQuery-v3.6.0-0769AD?logo=jQuery&style=flat-square",
    },
    {
      name: "jQuery UI",
      url: "https://jqueryui.com/",
      badge: "https://img.shields.io/badge/jQuery%20UI-v1.12.1-0769AD?logo=jQuery%20UI&style=flat-square",
    },
    {
      name: "jQuery Mobile",
      url: "https://jquerymobile.com/",
      badge: "https://img.shields.io/badge/jQuery%20Mobile-v1.5.0-0769AD?logo=jQuery%20Mobile&style=flat-square",
    },
    {
      name: "jQuery Validation Plugin",
      url: "https://jqueryvalidation.org/",
      badge: "https://img.shields.io/badge/jQuery%20Validation%20Plugin-v1.19.2-0769AD?logo=jQuery%20Validation%20Plugin&style=flat-square",
    },
    {
      name: "jQuery UI Touch Punch",
      url: "https://github.com/furf/jquery-ui-touch-punch",
      badge: "https://img.shields.io/badge/jQuery%20UI%20Touch%20Punch-v0.2.3-0769AD?logo=jQuery%20UI%20Touch%20Punch&style=flat-square",
    },
    {
      name: "MySQL",
      url: "https://www.mysql.com/",
      badge: "https://img.shields.io/badge/MySQL-Official-4479A1?logo=MySQL&style=flat-square",
    },
    {
      name: "PostgreSQL",
      url: "https://www.postgresql.org/",
      badge: "https://img.shields.io/badge/PostgreSQL-Official-336791?logo=PostgreSQL&style=flat-square",
    },
    {
      name: "MongoDB",
      url: "https://www.mongodb.com/",
      badge: "https://img.shields.io/badge/MongoDB-Official-13AA52?logo=MongoDB&style=flat-square",
    },
    {
      name: "Redis",
      url: "https://redis.io/",
      badge: "https://img.shields.io/badge/Redis-Official-D82C20?logo=redis&style=flat-square",
    },
    {
      name: "SQLite",
      url: "https://www.sqlite.org/index.html",
      badge: "https://img.shields.io/badge/SQLite-Official-204E8A?logo=SQLite&style=flat-square",
    }
  ];

  const seedTech = () => Technology.bulkCreate(techData);

module.exports = seedTech;


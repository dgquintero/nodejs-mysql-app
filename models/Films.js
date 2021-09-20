const Sequelize = require('sequelize');

const db = require('../db');

const Films = db.define('films', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  title : Sequelize.STRING(100),
  description : Sequelize.STRING(100),
  score: Sequelize.INTEGER,
  director: Sequelize.STRING
});

module.exports = Films;

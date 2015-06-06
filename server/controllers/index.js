var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      console.log('message get request');
    }, // a function which handles a get request for all messages
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('message POST request');
    }
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('users GET request');
    } ,
    post: function (req, res) {
      console.log('users POST request');
    }
  }
};


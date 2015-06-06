var db = require('../db');
var mysql = require('mysql');
var connection = require('../db/index');


var getTable = function(tableName, callback) {
  connection.query("SELECT * FROM " + tableName, callback);
  //db.query(queryString).then(function(){console.log(results)})
};

module.exports = {
  messages: {
    get: function (callback) {// a function which produces all the messages
      getTable("Message", callback);
    },
    post: function (message, callback) {
      module.exports.users.getUserWithId(message.username, function(user) {
        console.log('user: ', user);
        message.userId = user[0].id;
        delete message.username;

        connection.query("INSERT INTO MESSAGE SET ?", callback, message);
        // var query = db.query(queryString, message, function(err, result) {
        //   if(err) return console.log(err);
        //   if (callback) callback(result);
        // });
        // console.log(query.sql);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    getUserWithId: function (username, callback) {
      // callback = function(result) { result[0].id; };
      connection.query("SELECT id FROM User WHERE ?", callback, {username: username});
      // var query = db.query(queryString, {username: username}, function(err, result) {
      //   if (err) return console.log(err);
      //   if (callback) callback(result[0].id);
      // });
      // console.log(query.sql);

    },
    get: function (callback) {
      connection.query("SELECT * FROM User", callback);
      // var query = db.query(queryString, function(err, results) {
      //   if (err) return console.log(err);
      //   callback(results);
      // });
    },

    post: function (userObj, callback) {
      connection.query("INSERT INTO User SET ?", callback, userObj);
      // var query = db.query(queryString, {username: username}, function(err, result) {
      //   if(err) return console.log(err);
      //   if (callback) callback(result);
      // });
      // console.log(query.sql);
    }
  }
};


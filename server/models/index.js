var db = require('../db');
var mysql = require('mysql');

var getConnection = function() {
   var dbConnection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
    });
    dbConnection.connect();
    return dbConnection;
}

var getTable = function(tableName, callback) {
  var db = getConnection();
  var queryString = "SELECT * FROM " + tableName;
  //db.query(queryString).then(function(){console.log(results)})
  var query = db.query(queryString, function(err, results) {
    if(err) {
      return console.log(err);
    }
    console.log(results);
    callback(results);
  });
};

var query = function() {};

module.exports = {
  messages: {
    get: function (callback) {// a function which produces all the messages
      getTable("Message", callback);
    },
    post: function (message, callback) {
      module.exports.users.getId(message.username, function(userId) {

        message.userId = userId;
        delete message.username;

        var db = getConnection();
        var queryString = "INSERT INTO MESSAGE SET ?";
        var query = db.query(queryString, message, function(err, result) {
          if(err) return console.log(err);
          if (callback) callback(result);
        });
        console.log(query.sql);
      });
    } // a function which can be used to insert a message into the database
  },

  users: {
    getId: function (username, callback) {
      var db = getConnection();
      var queryString = "SELECT id FROM User WHERE ?";
      var query = db.query(queryString, {username: username}, function(err, result) {
        if (err) return console.log(err);
        if (callback) callback(result[0].id);
      });
      console.log(query.sql);

    },
    get: function (callback) {
      var db = getConnection();
      var queryString = "SELECT * FROM User";
      //db.query(queryString).then(function(){console.log(results)})
      var query = db.query(queryString, function(err, results) {
        if (err) return console.log(err);
        callback(results);
      });

    },

    post: function (username, callback) {
      var db = getConnection();
      var queryString = "INSERT INTO User SET ?";
      var query = db.query(queryString, {username: username}, function(err, result) {
        if(err) return console.log(err);
        if (callback) callback(result);
      });
      console.log(query.sql);
    }
  }
};


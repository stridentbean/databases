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

module.exports = {
  messages: {
    get: function () {// a function which produces all the messages

    },
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
    },

    post: function (username) {
      var db = getConnection();
      var queryString = "INSERT INTO User SET ?";
      var simpleQuery = db.query(queryString, {username: username}, function(err, result) {
        if(err) {
          console.log(err);
        }
      });
      console.log(simpleQuery.sql);
    }
  }
};


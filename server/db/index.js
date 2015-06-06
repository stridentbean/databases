var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var getConnection = function() {
   var dbConnection = mysql.createConnection({
      user: "root",
      password: "",
      database: "chat"
    });
    dbConnection.connect();
    return dbConnection;
}

module.exports.query = function(qs, callback, params) {
  var db = getConnection();
  var q = db.query(qs, params, function(err, result) {
    if (err) return console.error(err);
    // this.callback();
    callback(result);
  });
  console.log(q.sql);
  db.end();
  //db.query(queryString).then(function(){console.log(results)})
};

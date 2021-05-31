const mysql = require('mysql');



//mysql connection
var con = mysql.createConnection({
    host : "localhost",
    port : 3307,
    user : "root",
    password : "",
    database : "quiz_project",
});
con.connect(function(error){
    if(error) {
        console.log(error);
        return;
    }
    else
    {
        console.log('Database is connected')
    }
});

module.exports = con
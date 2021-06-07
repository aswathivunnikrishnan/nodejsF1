const express = require("express");
const app = express();


//Settings
app.set('port', process.env.PORT ||8000);

//middlewares
app.use(express.json());


//routes
app.use(require('./routes/user'));


//server starting
app.listen(app.get('port'),() => {
    console.log("server started", app.get('port'));
});
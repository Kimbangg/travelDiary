const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const MONGODB_URL = 'mongodb+srv://xmcdk:kwak@741852@dbdb.8enzp.mongodb.net/<travelDiary>?retryWrites=true&w=majority'
const app = express();
const ejs = require("ejs");


// DB Setting
mongoose.set("useNewUrlParser", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);
mongoose.connect(MONGODB_URL, {useNewUrlParser:true, useUnifiedTopology:true}, (err)=>{
  if(err){
      console.log(err);
  }
  else{
      console.log('connected');
  }
})
let db = mongoose.connection;



// Login Setting
app.use(session({ secret: "MySecret", resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

// Other Setting
app.set("view engine", "ejs");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



// Routes
app.use("/", require("./routes/main"));
app.use("/auth", require("./routes/auth"));


const port = 3000;
app.listen(port, () => {
  console.log('server on! http://localhost:'+port);
});

app.use(express.static(__dirname + "/views/auth"));

app.get('/iconspace', function(req, res){
  fs.readFile("/images/iconspace/Rectangle 1.png", function(err,data){
    res.writeHead(200, { 'Content-Type':'text/html'});
    res.end(data);
  });
});

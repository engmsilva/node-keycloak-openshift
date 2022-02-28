require('dotenv').config();
var express = require('express');
var app = express();
var serverPort = process.env.SERVER_PORT

const keycloak = require('./config/keycloak-config.js').initKeycloak();
app.use(keycloak.middleware());

const testController = require('./controller/test-controller.js');
app.use('/test', testController);

app.get('/', function(req, res){
   res.send("Server is up!");
});

app.listen(serverPort, function () {
  console.log(`Started at port ${serverPort}`);
});

require('dotenv').config();
const express = require('express');
const app = express();
var axios = require('axios'); 
const bodyParser =  require('body-parser');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(express.static('public'));
  app.set('view engine', 'ejs');

    app.get("/", function (req, res) {
      res.render('home', {checkVar: ''});
    });

    app.post("/", function(req, res) {
      axios(config2 = {
        method: 'get',
        url: 'https://cloud.boltiot.com/remote/'+ process.env.DEVICE_API + '/isOnline?deviceName=' + process.env.DEVICE_ID,
        headers: { }
      })
      .then(function onlineRes(response) {
        if(response.data.value === "offline") {
          res.render('home', {checkVar: 'Device offline'});
        }
        else if(response.data.value === "online") {
          res.sendFile(__dirname + "/index.html");
        }  
      }).catch(function (error) {
        res.render('home', {checkVar: 'Try again!'});
        }); 
    });
  
    app.get("/check", function(req, res) {
      res.redirect("/");
    });
    
    var interval; //global variable
    app.post("/check", function (req, res) {
      
      if(req.body.toggle === "on") { 
       interval =  setInterval(() => {
        axios(config = {
          method: 'get',
          url: 'https://cloud.boltiot.com/remote/'+ process.env.DEVICE_API + '/digitalRead?pin=1&deviceName=' + process.env.DEVICE_ID,
          headers: { }
        }).then(function (response) {
          if(response.data.value === "1") {
            client.messages.create({
              body: 'https://maps.google.com/?q=' + req.body.lat + "," + req.body.long,
              from: process.env.FROM_NUMBER,
              to: process.env.TO_NUMBER
            }).then(message => console.log(message.sid));
          } 
          else if (response.data.value === "0") {
              console.log("not recorded");
          }
        }).catch(function (error) {
            console.log(error);
          });
        }, 3000);
      }
      else if (req.body.toggle === "off") {
        res.redirect("/restart");
      }
    });

    app.get("/restart", function(req, res) {
      clearInterval(interval);
      res.redirect("/");
    });
        
  app.listen(process.env.PORT || 3000, function () {
    console.log("Server running at port 3000");
  });

 
//require the packages
require('dotenv').config();
const express = require('express');
const app = express();
var axios = require('axios'); 
const bodyParser =  require('body-parser');
const cron = require('node-cron');
const client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN); //Fetching the environment variables
  app.use(bodyParser.urlencoded({ extended: true}));
  app.use(express.static('public'));
  app.set('view engine', 'ejs');

    //Home route
    app.get("/", function (req, res) {
      if(task) {
        task.stop();
      }
      res.render('home', {checkVar: ''});
    }); 

    app.post("/", function(req, res) {
      //axios API request to bolt cloud returns a promise
      axios(config2 = {
        method: 'get',
        url: 'https://cloud.boltiot.com/remote/'+ process.env.DEVICE_API + '/isOnline?&deviceName=' + process.env.DEVICE_ID,
        headers: { }
      })
      .then((response) => {
        //if-else to check whether the device is online or not
        if(response.data.value === "offline") {
          //render the same page when the device is offline with the message: 'Device offline'
          res.render('home', {checkVar: 'Device offline'});
        }
        else if(response.data.value === "online") {
          //load the index.html file if the device is online
          res.render('index', {checkState: '', fromState: "required", toState: "required", onState: "required", offState: "disabled"});
        }  
      }).catch(function (error) {
        res.render('home', {checkVar: 'Try again!'});
        }); 
    });
  
    app.get("/check", function(req, res) {
      res.redirect("/");
    });
    
    var task; //global variable
    app.post("/check", function (req, res) {
      
      //check if the radiobox clicked is 'Tracker ON'
      if(req.body.toggle === "on") {
        //set an interval to return values from the bolt cloud for every 3000 ms 
        task = cron.schedule('*/3 * * * * *',() => {
          //axios API request to bolt cloud returns a promise
        axios(config = {
           method: 'get',
           url: 'https://cloud.boltiot.com/remote/'+ process.env.DEVICE_API + '/digitalRead?pin=1&deviceName=' + process.env.DEVICE_ID,
           headers: { }
         }).then(function (response) {
           //check if the returned value is a "1" which indicates that the sensor is touched
           if(response.data.value === "1") {
             //prepare an SMS body via Twilio which sends in the Latitude and Longitude values to a google map link
             client.messages.create({
               body: 'https://maps.google.com/?q=' + req.body.lat + "," + req.body.long,
               from: req.body.phone,
               to: req.body.phone2
             }).then(message => console.log(message.sid));
           } 
           //if the value is 0 (sensor is idle), log a message
         }).catch(function (error) {
             res.render('home', {checkVar: 'there was an error, try again'});
           });
         });
         timeState = setTimeout(() => {
           task.stop();
           res.redirect("/");
         }, 3600000);
         res.render('index', {checkState: 'DO NOT QUIT BEFORE SWITCHING THE TRACKER OFF',fromState: "disabled", toState: "disabled", onState: "disabled", offState: "required"})
        }
      else if (req.body.toggle === "off") {
        if(timeState) {
        clearTimeout(timeState);
        }
        //if the radiobox selected is 'Tracker OFF', redirect to the restart route
        task.stop();
        res.redirect("/");
      }
    });

        
  app.listen(process.env.PORT || 3000, function () {
    //server is listening at port 3000 or a dynamic port which is used when deploying the website
    console.log("Server running at port 3000");
  });
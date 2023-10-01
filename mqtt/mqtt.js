const mqtt = require('mqtt');

const express = require('express');
const fs = require('fs')
const helmet = require("helmet");
const https = require('https')
var sslOptions = {
key: fs.readFileSync('key.pem'),
cert: fs.readFileSync('cert.pem'),
passphrase: 'qwerty'
};

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Lighting = require('./models/lighting');
mongoose.connect('mongodb+srv://s222206515:ON0q3oXxbSLXjaTs@cluster0.qoro6t2.mongodb.net/myFirstDatabase', {useNewUrlParser: true, useUnifiedTopology: true });


const app = express();


app.use(helmet({

  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "https://code.highcharts.com/highcharts.js","https://maps.googleapis.com", "https://code.jquery.com", "https://cdnjs.cloudflare.com", "https://stackpath.bootstrapcdn.com", "https://fonts.googleapis.com"],
      connectSrc: ["'self'", "https://localhost:5000", "mongodb+srv://your-mongodb-url"],
      frameAncestors: ["'none'"],
      "Cross-Origin-Embedder-Policy": "require-corp",
      imgSrc: ["'self'", "data:"],
      styleSrc: ["'self'","https://maxcdn.bootstrapcdn.com", "https://stackpath.bootstrapcdn.com", "https://fonts.googleapis.com", "'unsafe-inline'"],
      fontSrc: ["'self'", "https://maxcdn.bootstrapcdn.com","https://stackpath.bootstrapcdn.com","https://fonts.gstatic.com", "https://fonts.googleapis.com", "data:"],
      objectSrc: ["'none'"],
      upgradeInsecureRequests: []
    },

    reportOnly: false
  }

}));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const port = 5001;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({
    extended: true
}));

var server = https.createServer(sslOptions, app).listen(port, function(){
  console.log("Express server listening on port " + port);
  });

  app.get('/test', (req, res) => {
    res.send('The MQTT API is working!');
  });

const client = mqtt.connect("mqtt://broker.hivemq.com:1883", {encoding: 'utf8'});


client.on('connect', () => {
  console.log('Connected to MQTT broker');
  client.subscribe('lighting/control');
  sendControlCommand('device1', 'on'); // Turn on 'device1'

});


function sendControlCommand(deviceId, action) {
  const message = JSON.stringify({
    device_id: deviceId,
    action: action,
  });
  console.log(`Turning ${deviceId} device ${action}`);
  client.publish('lighting/control', message);
}

// Example usage:
// sendControlCommand('device2', 'off'); // Turn off 'device2'

client.on('message', async (topic, message) => {
  console.log("message received");
  try {
    const data = JSON.parse(message.toString());

    const deviceId = data.device_id;
    const action = data.action;

    try {
      const device = await Lighting.findOne({name:deviceId});
      if(!device){
        console.log("no such device found");
      }
      else{
        if(action === 'on'){
          device.status = true;
        }
        else if(action === 'off'){
          device.status=false;
        }
        
        await device.save();
        console.log("Done Toggle of Device:" ,deviceId);
      }
    } catch (err) {
      console.log(err);
    };

  } catch (error) {
    console.error('Error parsing MQTT message:', error);
  }
});



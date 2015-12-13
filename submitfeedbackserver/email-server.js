var express = require('express');

var nodemailer = require("nodemailer");

//var util=require('util'); 
var bodyParser = require('body-parser')

var app = express();

var transporter = nodemailer.createTransport({
   service: "Gmail",
   auth: {
       user: "mediabox.jodamn.com@gmail.com",
       pass: "QEzljXqTBWXis"
   }
});

app.use(bodyParser.text({ type: '*/*'}))

app.post('/', function (req, res) {

    var msg = req.body;
    res.end();  
    // res.send('you posted: ' + req.body);
    if (msg) { 

    // setup e-mail data with unicode symbols
    var mailOptions = {
        from: 'Mediabox <mediabox.jodamn.com@gmail.com>', // sender address
        to: 'css-founders@googlegroups.com', // list of receivers
        subject: 'Feedback ✔', // Subject line
        text: msg, // plaintext body
        html: '<p>' + msg + '</p>'
    };
    
    // send mail with defined transport object
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);  
    });
    }
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Relay email server listening at http://%s:%s', host, port);
});

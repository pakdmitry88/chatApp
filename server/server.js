//server.js
const Pusher = require('pusher');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var pusher = new Pusher({
  appId: '1042441',
  key: '73ab9f4e8e72fe50e567',
  secret: '19cb2c1866e33c7a1886',
  cluster: 'eu',
  encrypted: true
});
app.set('PORT', process.env.PORT || 5001);
app.post('/message', (req, res) => {
  const message = req.body;
  console.log('Privet-app')
  pusher.trigger('chat', 'message', message);
  res.send(message)

});
app.listen(app.get('PORT'), () =>
  console.log('Listening at ' + app.get('PORT')))

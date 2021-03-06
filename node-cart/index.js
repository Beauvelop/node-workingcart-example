const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session');

let config = require('./config.json')

const phoneCtrl = require('./controllers/phoneCtrl')
const cartCtrl = require('./controllers/cartCtrl')
const app = express();

app.use(bodyParser.json());
app.use(session({
  secret: config.sessionSecret,
  saveUninitialized: false,
  resave: false
}))

app.use(function(req, res, next) {
  console.log("path: ", req.path);
  console.log("body: ", req.body);
  console.log("query: ", req.query);
  console.log("id: ", req.params.id);
  next();
})

app.get('/api/phones', phoneCtrl.index);
app.get('/api/phones/:id', phoneCtrl.selection);
app.post('/api/phones', phoneCtrl.create);
app.put('/api/phones/:id', phoneCtrl.update);
app.delete('/api/phones/:id', phoneCtrl.destroy);

app.get('/api/cart', cartCtrl.index)
app.post('/api/cart', cartCtrl.create)

app.listen(config.port, function() {
  console.log("Listening on PORT: " + config.port)
});

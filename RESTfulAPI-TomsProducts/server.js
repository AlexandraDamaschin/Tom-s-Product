var express = require('express'),
app = express(),
// port = process.env.PORT || 3000;
// app.listen(port);

// console.log('product list RESTful API server started on:'+ port);

port= process.env.PORT || 3055,
mongoose= require('mongoose'),

Products= require ('./api/models/productsListModel'),
bodyParser= require('body-parser');

const cors= require('cors')
app.use(cors());

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost/Productdb');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

var routes= require ('./api/routes/productsListRoutes');
routes(app);

app.use(function(req, res){
    res.status(404).send({url: req.originalUrl + 'not found'})
});
app.listen(port);
console.log('product list RESTful API server started on:'+ port);


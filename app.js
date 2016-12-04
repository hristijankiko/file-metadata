let express = require('express');
let app = express();
var multer  = require('multer')
var upload = multer();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', function(req, res){
  res.render('index');
});

app.post('/get-file-size', upload.single('inputFile'), function(req, res, next){
  res.json({size: req.file.size});
});

app.listen(process.env.PORT || 3000, function(req, res){
  console.log("Listening at port 3000");
});
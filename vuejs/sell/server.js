/**
 * Created by badou on 2017/6/12.
 */
const express = require('express');
const config = require('./config/index');

const app = express();

//app.set('view engine', 'html');
app.use(express.static('./dist'));

const router = express.Router();

router.get('/',function(req,res,next){
  res.render('./index');
  next();
});
router.get('/goods',function(req,res,next){
  req.url = './index.html';
  res.render('./index');
  next();
});

app.use(router);

var appData = require('./data.json');
var seller = appData.seller;
var goods = appData.goods;
var ratings = appData.ratings;

var apiRoutes = express.Router();

apiRoutes.get('/seller',function(req,res){
  res.json({
    errno:0,
    data:seller
  })
});
apiRoutes.get('/goods',function(req,res){
  res.json({
    errno:0,
    data:goods
  })
});
apiRoutes.get('/ratings',function(req,res){
  res.json({
    errno:0,
    data:ratings
  })
});

app.use('/api',apiRoutes);

const port = process.env.PORT || config.build.port;
const host = '192.168.1.187' || 'localhost';

module.exports = app.listen(port,host,(err)=>{
  if(err){
    console.log(err);
    return;
  }
  console.log('Listening at http://'+host+':'+port+'\n');
});
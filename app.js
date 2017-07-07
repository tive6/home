/**
 * Created by badou on 2017/6/5.
 */
const express = require('express');
const proxy = require('http-proxy-middleware');//引入代理中间件
const app = express();
app.use(express.static('./'));
//app.use(express.static('client'));

// Add middleware for http proxying
const apiProxy = proxy('/api', { target: 'https://dev.badoufax.com',changeOrigin: true });
app.use('/api/*', apiProxy);//api子目录下的都是用代理
//app.use('*', apiProxy);//api子目录下的都是用代理

// Render your site
app.get('/index.html', function(req,res){
  res.sendFile(__dirname+'/index.html');
});

var port = 3001;
var host = '192.168.1.187';

app.listen(port,host, () => {
  console.log('Listening on: http://'+host+':'+port);
});

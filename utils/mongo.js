const mongoose = require('mongoose');
//连接数据库 mongod 服务器端  mongo客户端
//数据库的名称可以是不存在 创建一个lagou数据库
mongoose.connect('mongodb://localhost:27017/lagou', { useNewUrlParser: true });
var db = mongoose.connection;
////如果连接成功会执行error回调
db.on('error', console.error.bind(console, 'connection error:'));
//如果连接成功会执行open回调
db.once('open', function() {
  console.log('successful database connection~')
});

module.exports = mongoose
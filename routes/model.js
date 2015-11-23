/**
 * Created by Administrator on 2015/11/23.
 */


var model = require('../mongoServer');

var mongoose = model.mongoose;
//连接数据库
model.connection;
var Schema = mongoose.Schema;

//表映射
mongoose.model("UserInfo", new Schema({
    username: String,
    password: String
}));

/**
 * 增加用户
 * @param 用户名
 * @param 密码
 */
exports.addUser = function(username,password){
    var User = mongoose.model("UserInfo");
    var user = new User({"username":username,"password":password});
    user.save(function(err){

    });
};

/**
 * 查找用户
 * @param 用户名
 * @param callBack(err,doc)
 */
exports.getUser = function(username,callBack){
    var User = mongoose.model("UserInfo");
    User.find({"username":username},callBack);
}

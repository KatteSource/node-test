/**
 * Created by Administrator on 2015/11/23.
 */


var model = require('../mongoServer');

var mongoose = model.mongoose;
//�������ݿ�
model.connection;
var Schema = mongoose.Schema;

//��ӳ��
mongoose.model("UserInfo", new Schema({
    username: String,
    password: String
}));

/**
 * �����û�
 * @param �û���
 * @param ����
 */
exports.addUser = function(username,password){
    var User = mongoose.model("UserInfo");
    var user = new User({"username":username,"password":password});
    user.save(function(err){

    });
};

/**
 * �����û�
 * @param �û���
 * @param callBack(err,doc)
 */
exports.getUser = function(username,callBack){
    var User = mongoose.model("UserInfo");
    User.find({"username":username},callBack);
}

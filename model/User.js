/**
 * Created by Administrator on 2015/11/24.
 */
var mongoose = require('mongoose');
mongoose.connect('mongodb://katt:xu_jiaxin1234@ds057254.mongolab.com:57254/kattnode');
var Schema = mongoose.Schema;
var MongooseDao = require('mongoosedao');

//�Ǽ�
var userSchema = new Schema(
    {
        "username": "String",
        "password": "String"
    }
);

//User����
var User = mongoose.model('UserInfo', userSchema);
var UserDao = new MongooseDao(User);

module.exports = UserDao;
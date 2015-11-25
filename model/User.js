/**
 * Created by Administrator on 2015/11/24.
 */

var mongoose = require('../mongoServer').mongoose;
var Schema = mongoose.Schema;
var MongooseDao = require('mongoosedao');

//骨架
var userSchema = new Schema(
    {
        "username": "String",
        "password": "String"
    }
);

//数据库中User集合
var User = mongoose.model('UserInfo', userSchema);
var UserDao = new MongooseDao(User);

module.exports = UserDao;
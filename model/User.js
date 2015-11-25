/**
 * Created by Administrator on 2015/11/24.
 */

var mongoose = require('../mongoServer').mongoose;
var Schema = mongoose.Schema;
var MongooseDao = require('mongoosedao');

//�Ǽ�
var userSchema = new Schema(
    {
        "username": "String",
        "password": "String"
    }
);

//���ݿ���User����
var User = mongoose.model('UserInfo', userSchema);
var UserDao = new MongooseDao(User);

module.exports = UserDao;
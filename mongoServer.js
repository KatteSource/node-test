/**
 * Created by Administrator on 2015/11/23.
 */

//mongoDb  ���ݿ��й� :https://mongolab.com/databases/kattnode  �˺ţ�17603606331
var mongoose = require('mongoose');
//�����ַ���
mongoose.connect('mongodb://katt:xu_jiaxin1234@ds057254.mongolab.com:57254/kattnode');
exports.mongoose = mongoose;





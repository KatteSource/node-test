/**
 * Created by Administrator on 2015/11/19.
 */

//mysql
var mysql=require('mysql');

//链接字符串
function connectServer(){
    var client=mysql.createConnection({
        host:'localhost',
        user:'root',
        password:null,
        database:'test_node'
    });
    return client;
}


function  selectFun(client,username,callback){
    if(client==null){
        var userList=[//静态用户
            {
                'username':'417560450',
                'password':'xu_jiaxin1234'
            }
        ];
        callback(userList);
    }else{
        client.query('select password from UserInfo where username="'+username+'"',function(err,results,fields){
            if(err) throw err;
            callback(results);
        });
    }
}

function insertFun(client , username , password,callback){
    client.query('insert into UserInfo (userName,passWord)value(?,?)', [username, password], function(err,result){
        if( err ){
            console.log( "error:" + err.message);
            return err;
        }
        callback(err);
    });
}

exports.connect = connectServer;
exports.selectFun  = selectFun;
exports.insertFun = insertFun;
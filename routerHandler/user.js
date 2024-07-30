const db = require('../db/db')
const crypt = require('bcryptjs')
exports.users = (req,res)=>{
    const infor =  req.body
    if(!infor.username || !infor.password){
        // return res.send({
        //     status:1,
        //     message:'username and password can not be null'
        // })
        return res.cc('username and password can not be null')
    }
    const sql1 = 'select * from users where username = ?'
    db.query(sql1,infor.username,(err,result) =>{
        if(err){
            // return res.send({
            //     status:1,
            //     message:err.message
            // })
            return res.cc(err)
        }
        if (result.length > 0){
            // return res.send({
            //     status:1,
            //     message:'username already used'
            // })
            return res.cc('username already used')
        }

        infor.password = crypt.hashSync(infor.password,10)
        sql2 = 'insert into users set ?'
        db.query(sql2,{username:infor.username,password:infor.password},(err,result)=>{
            if(err){
                // return res.send({
                //     status:1,
                //     message:err.message
                // })
                return res.cc(err.message)
            }
            if (result.length == 0){
                // return res.send({
                //     status:1,
                //     message:'regist fail'
                // })
                return res.cc('regist fail')
            }
            // res.send({
            //     status:0,
            //     message:'regist ok'
            // })
            res.cc('regist okok',0)
        })
    
    })
    
    
}

exports.login = (req,res)=>{
    res.send('login ok')
}
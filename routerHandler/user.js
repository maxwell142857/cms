const db = require('../db/db')
const crypt = require('bcryptjs')
exports.users = (req,res)=>{
    const infor =  req.body
    if(!infor.username || !infor.password){
        return res.send({
            status:1,
            message:'username and password can not be null'
        })
    }
    const sql = 'select * from users where username = ?'
    db.query(sql,infor.username,(err,result) =>{
        if(err){
            return res.send({
                status:1,
                message:err.message
            })
        }
        if (result.length > 0){
            return res.send({
                status:1,
                message:'username already used'
            })
        }

        console.log(infor.password)
        infor.password = crypt.hashSync(infor.password,10)
        console.log(infor.password)
        res.send('ok')
    
    })
    
    
}

exports.login = (req,res)=>{
    res.send('login ok')
}
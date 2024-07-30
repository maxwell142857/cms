const express = require("express");
const app = express()
const joi = require('joi')

// 配置跨域中间件
const cors = require("cors")
app.use(cors())

//配置表单解析中间件
app.use(express.urlencoded({extended:false}))
// app.use(express.json());

// 使用中间件处理“发送失败结果”
app.use((req,res,next) =>{
    res.cc = function(err,status=1){
        res.send({
            status: status,
            message: err instanceof Error?err.message:err
        }
        )
    }
    next()
})
// 导入并使用用户路由
const userRouter = require('./router/user')
app.use('/api',userRouter)


// 错误级别中间件
app.use((err,req,res,next) =>{
    if(err instanceof joi.ValidationError){
        res.cc(err)
    }else{
        res.cc(err)
    }
    
})
app.listen(3007,()=>{
    console.log('api server running at 3007')
})

const express = require("express");
const app = express()

// 配置跨域中间件
const cors = require("cors")
app.use(cors())

//配置表单解析中间件
app.use(express.urlencoded({extended:false}))
// app.use(express.json());

// 导入并使用用户路由
const userRouter = require('./router/user')
app.use('/api',userRouter)

app.listen(3007,()=>{
    console.log('api server running at 3007')
})

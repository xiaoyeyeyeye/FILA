const express = require('express')
const { mongoose, Users } = require('./database')

let obj = {
    name: '大明',
    age: 50,
    time: new Date(),
    email: '12348@qq.com'
}

Users.create(obj, (err, doc) => {
    if (err) {
        console.log(err);
        return
    }
    console.log('插入成功', doc);
})
Users.insertMany([obj,obj],(err,doc)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log('插入数组成功');
    console.log(doc);
    Users.deleteMany({},(err,doc)=>{
        console.log(doc);
    })
})

Users.find({}, (err, doc) => {
    console.log('模糊', doc);
}).limit(1).gt('age',98)
const reslut = Users.find({ name: '小明' }, (err, doc) => {

    if (doc[0]) {
        console.log('有值');
    } else {
        console.log('无返回值');
    }
})
const router = express.Router()
router.use((req, res, next) => {
    console.log(`路由执行成功啦~~~`, Date.now());
    next()
})

router.post(`/`,(req, res, next) => {
    res.send(req.body)
    // next()
})


router.post(`/index`, (req, res, next) => {
    res.send(req.body)
})
module.exports = router
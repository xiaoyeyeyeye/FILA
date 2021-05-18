
const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/test', { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.Promise = global.Promise; //node里有global的全局变量，让mongose里默认的Promise使用node里的Promise,让mongoose也能用node的语法
const TestSchema = mongoose.Schema({
    name: { type: String },//属性name,类型为String
    age: { type: Number, default: 0 },//属性age,类型为Number,默认为0
    time: { type: Date, default: Date.now },
    email: { type: String, default: '' }
});


const Users = mongoose.model('Users', TestSchema)
// const Group = mongoose.model('Group',{},'group')



module.exports ={
    mongoose,
    Users
}
const Users = mongoose.model('Users', TestSchema)
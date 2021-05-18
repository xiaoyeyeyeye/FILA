const { ALL } = require('dns');
const fs = require('fs')
const mongodb = require('mongoose');
const { type } = require('os');
const db = mongodb.connect('mongodb://localhost:27017/test', { useUnifiedTopology: true, useNewUrlParser: true },
    function (err, doc) {
        if (err) {

            console.log('连接失败');
            return false
        }
        else {
            console.log('连接成功')
            const TestSchema = mongodb.Schema({
                info:  Object,
                child:Array,
                type:String,
                time: { type: Date, default: Date.now },
            });


            fs.readFile('./json_data/all.json', 'utf-8', function (err, doc) {
                const data = JSON.parse(doc).data
                data.forEach(element => {
                    element.type='all'

                    let {
                        image,
                        id_goods,
                        price,
                        pro_name,
                        pro_title,
                      
                    } = element.info;
                    element.info = {
                        image,
                        id_goods,
                        price,
                        pro_name,
                        pro_title,
                    };
                    element.child.forEach((item, index) => {
                        let {
                            image,
                            id_goods,
                            stock,
                            info,

                        } = item;
                        element.child[index] = {
                            image,
                            id_goods,
                            stock,
                            info,


                        }
                        // console.log(item);
                    })
                    console.log(element.type);
                });
                const All = mongodb.model('All', TestSchema, 'all')
                All.insertMany(data, function (err, doc) {
                    if(err){
                        console.log('插入失败',err)
                        return ;
                    }
                    console.log(doc);
                })

            })





        }
    }
)





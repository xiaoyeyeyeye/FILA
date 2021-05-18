const express = require('express')
const cors = require('cors')
const router = require('./store/index');



const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(router)


const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

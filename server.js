var express = require('express')
var app = express()


app.use(express.static('client'));
//app.use(express.static('body-parser'));
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies








app.listen(8090)

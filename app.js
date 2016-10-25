#!/usr/bin/env node
var express = require('express')
var app = express()
app.set('port',process.env.PORT || 4040)
app.get('/',function(req,res){
	res.send('Hello, World!')
})
app.get('/cock',function(req,res) {
	res.send('i love basketball')
})
app.listen(app.get('port'),function() {
	console.log('Node app listening on port', app.get('port'))
})
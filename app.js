const express = require('express');

const PORT = 9999;
const HOST = "0.0.0.0";

const app = express();

app.get('/',function(req,res){
	res.send("Hello NPM");
});


app.listen(PORT,HOST,function(){
	console.log("APP is running....");
});
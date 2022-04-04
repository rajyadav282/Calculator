const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(request,response){
  response.sendFile(__dirname +"/index.html");
});

app.post("/",function(req,res){
  var num1=req.body.num1;
  var num2=req.body.num2;
  var result=num1+num2;
  res.send("The result of the calculator is " + result);
});

app.listen(3000,function(){
  console.log("Server is running on port 3000");}
);

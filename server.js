var express = require('express')
var app = express()



let thing = [];
let things = ['bag',
'shoes',
'coffee',
'computer'];

let toys = ['Piano, Scotty'];

// let people = [person1, person2];

// let person1 = {"product_name": , "sellerName": , "phoneNum": , "email": , "college": };

// let products = [];

// let product1 = {"product_name": , "price": , "product_picture": , "condition": , "explanation": };



app.use(express.static('client'));
app.use(express.static('body-parser'));
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies


app.get('/thing/list', function(req, resp){
 // resp.send(things);
 //resp.json(things);
 if(things == undefined || things.length == 0)
 {
  resp.status(404).json("Sorry folks, don't have a list of Jugnoo things!");
 }
 else{
   resp.json(things);
 }
})

app.post('/thing/add', function(req,resp){
  //console.log(req)
 console.log(req.body);
  resp.send("I am Posting!");
  const newthing= req.body.newthing;
  things.push(newthing);
});

app.get('/toy/list', function(req, resp){
  // resp.send(things);
  //resp.json(things);
  if(toys == undefined || toys.length == 0)
  {
   resp.status(404).json("Sorry folks, don't have a list of toys!");
  }
  else{
    resp.json(toys);
  }
 })

app.get('/html', function(req, resp){
  resp.set('Content-Type','text/html');
  let htmltext = '<html> <body> <h1> Sell yours, be new owner! </h1> </body> </html>'
  resp.send(htmltext);
 // resp.json(things);
 // resp.status(404).json(things);
})






app.listen(8090)

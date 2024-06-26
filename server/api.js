var express=require("express");
var cors=require("cors");
var mongoClient = require('mongodb-legacy').MongoClient;
var port =4000;



var connectionString="mongodb+srv://ambuj:Password@database.fp8k0cj.mongodb.net/";

var app=express();
app.use(cors());
app.use(express.urlencoded({
    extended:true
}));
app.use(express.json());

app.get("/getusers",(req,res)=>{
mongoClient.connect(connectionString,(err,clientObj)=>{
    if(!err){
        var datbase=clientObj.db("reactdb");
        datbase.collection("tblusers").find({}).toArray((err,document)=>{
            if(!err){
                 res.send(document);
            }
        })
    }
})
});

app.post("/registeruser",(req,res)=>{
    var  userdetails={
        UserId:req.body.UserId,
        UserName:req.body.UserName,
        Password:req.body.Password,
        Age:parseInt(req.body.Age),
        Mobile:req.body.Mobile,
        Subscribed:(req.body.Subscribed=="true")?true:false
    }
    mongoClient.connect(connectionString,(err,clientObj)=>{
       
    if(!err){
       var database=clientObj.db("reactdb");
       database.collection('tblusers').insertOne(userdetails,(err,result)=>
         {
            if(!err)
           {
            console.log("record inserted");
           }
         })
    }})

});

app.get("/getproducts",(req,res)=>{
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
            var database=clientObj.db("reactdb");
            database.collection("tblproducts").find({}).toArray((err,documents)=>{
                if(!err){
                    res.send(documents);
                }
            })
        }
    }
    )
});

app.get("/getcategories",(req,res)=>{
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
            var database=clientObj.db("reactdb");
            database.collection("tblcategories").find({}).toArray((err,documents)=>{
                if(!err){
                    res.send(documents);
                }
            })
        }
    }
    )
});

app.get("/getproducts/:id",(req,res)=>{
    let productId=parseInt(req.params.id);
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
            var database=clientObj.db("reactdb");
            database.collection("tblproducts").find({id:productId}).toArray((err,documents)=>{
                if(!err){
                    res.send(documents);
                }
            })
        }
    }
    )
});

app.put("/updateuser/:UserId",(req,res)=>{
    let Id=req.params.UserId;
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
            var database=clientObj.db("reactdb");
            database.collection("tblusers").findOneAndUpdate({UserId:Id},{$set:{Subscribed:true}},((err,documents)=>{
                if(!err){
                    console.log("record updated");
                }
            }))
        }
    }
    )
});

app.put("/updateusers/:UserId",(req,res)=>{
    let Id=req.params.UserId;
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
            var database=clientObj.db("reactdb");
            database.collection("tblusers").findOneAndUpdate({UserId:Id},{$set:{Subscribed:false}},((err,documents)=>{
                if(!err){
                    console.log("record updated");
                }
            }))
        }
    }
    )
});

app.delete("/deleteuser/:UserId",(req,res)=>{
    let Id=req.params.UserId;
    mongoClient.connect(connectionString,(err,clientObj)=>{
        if(!err){
            var database=clientObj.db("reactdb");
            database.collection("tblusers").findOneAndDelete(({UserId:Id}),((err,documents)=>{
                if(!err){
                    console.log("record deleted");
                    }
            }))
        }
    }
    )
});

app.listen(port);
console.log("server started");
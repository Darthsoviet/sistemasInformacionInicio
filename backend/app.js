const express=require("express");
const app=express()
const cors=require("cors");
const path=require("path");


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,'public')));


app.use("/api",require("./routes/LoginRoute"));
app.use("/api",require("./routes/ProductoRoute"));
app.use("/api",require("./routes/PedidoRoutes"));

app.get('*', function(req, res){
   res.redirect("/")
 });



module.exports=app;

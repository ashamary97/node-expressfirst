var Express=require("express")
var app=Express()

app.get("/",(req,res)=>{
res.send("<h1> Welcome to my website </h1>")
})

app.get("/home",(req,res)=>{
    res.send("<h1>Welcome to the home page</h1>")
})

app.get("/gallery",(req,res)=>{
    res.send("<h1>Welcome to the Gallery</h1>")
})

app.get("/contact", (req,res)=>{
    res.send("<h1>Welcome to the contacts</h1>")
})

app.listen(3000, (error)=>{
    if(error){
        console.log("Error Occured")
    }
    else{
        console.log("Server Running")
    }
})

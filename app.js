const Express=require("express")
const Bodyparser=require("body-parser")
const Mongoose=require("mongoose")
const Cors=require("cors")
const {courses}=require("./coursemodel")

const app=Express()
app.use(Cors())
app.use(Bodyparser.urlencoded({extended:true}))
app.use(Bodyparser.json())
Mongoose.connect("mongodb+srv://Shaheen:SHA78600@cluster0.rnh26c2.mongodb.net/courseDB1?retryWrites=true&w=majority")


app.post("/addcourse",async (req,res)=>{
    const data=req.body
    const ob=new courses(data)
    ob.save(
        (error,data)=>{
            if(error)
            {
              res.send("error occured" +error)
            }
            else
            {
              res.send(data)
            }
        }
    )
})

app.get("/viewcourse",(req,res)=>{
    res.send("Welcome to view course")
})

app.get("/searchcourse",(req,res)=>{
    res.send("Welcome to search course")
})

app.get("/updatecourse",(req,res)=>{
    res.send("Welcome to update course")
})

app.get("/deletecourse",(req,res)=>{
    res.send("Welcome to delete course")
})

app.listen(5000,()=>{
    console.log(("Server running on http://localhost:5000"))
})


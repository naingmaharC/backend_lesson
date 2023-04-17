import express from 'express'
import bodyParser  from 'body-parser';
import { writeFile } from 'fs';
import { fileWrite } from './fileManager';

const port  = 8000;
const app:express.Express =  express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get("/",(req,res)=>{
    return res.status(200).send("Mingalarbar")
})

app.get("/hello",(req,res)=>{
    let query:IUserQueryParam = req.query as any
    return res.status(200).send("Hello " + query.name)
})

app.post("/add",(req,res)=>{
    let body:createFile = req.body as any
   if(!body.content || !body.name || !body.extension){
    return res.status(400).send("Invaild Data")
   } else {
     fileWrite({content:body.content, name:body.name, extension:body.extension, cb: (error) =>{
        if(error) {return res.status(500).json({error:error})}
        else{ return res.status(200).json({massage: "Success"})}
     }})
   }    
})

app.listen(port,()=>{
    console.log("Server Start 321.....")
})

interface createFile {
    content: string,
    name: string,
    extension: string,
}

interface IUserQueryParam {
    name: string,
    id:number
}
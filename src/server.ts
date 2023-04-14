import express from 'express'
import bodyParser  from 'body-parser';

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

app.listen(port,()=>{
    console.log("Server Start 321.....")
})


interface IUserQueryParam {
    name: string,
    id:number
}
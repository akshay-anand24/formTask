const { model } = require('mongoose')

function userApi(){

let express=require('express')
let connection=require('../connection')
let userModule=require('./userModule')
let cors=require('cors')
let app=express()

app.use(express.json())
app.use(cors())
let port=process.env.PORT || 8000

app.get('/',async(req,resp)=>{
    let result=await userModule.find({})
    resp.send(result);
})
app.post('/',async(req,resp)=>{
    let result=new userModule(req.body)
    result=await result.save()
    if(result)
    resp.send({
        "code": "200",
        "msg": "Successfully submitted your form.",
        "model": {
        "referenceId": btoa(result.rid),
        "status": "Waiting",
        "statusCode": "W001"
        }
        }
        );
        else
        resp.status(400).send('bad request')
})
app.post('/find',async(req,resp)=>{
    let result=await userModule.find({rid:req.body.rid})
    if(result.length)
   { let data={
        "code": "200",
        "msg": "Successfully fetch the details.",
        "model": {
        "referenceId":btoa(result[0].rid),
        "status": "Approved",
        "statusCode": "A001"
        }
        }
      
    // data=btoa(data.model.referenceId)
       
    resp.send(data)}
    else
    resp.status(400).send({"code": "400","msg": "Invalid transaction reference id.","model": null})
})


app.listen(port)
}

module.exports=userApi
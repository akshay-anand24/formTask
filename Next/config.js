import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost:27017';
// const url='mongodb+srv://akshay:akshay@cluster0.4qt4vhq.mongodb.net/formTask?retryWrites=true&w=majority'
const options = { useNewUrlParser: true, useUnifiedTopology: true };

const client = new MongoClient(url);
const database='formTask'

async function connect(){
    let result= await client.connect()
    let db=result.db(database)
    return db.collection('usercollections')
}

module.exports=connect
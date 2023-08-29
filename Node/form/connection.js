const mongoose=require('mongoose')
// mongoose.connect('mongodb+srv://akshay:akshay@cluster0.4qt4vhq.mongodb.net/formTask?retryWrites=true&w=majority').then((v)=>{
//     console.log('connected')
// }).catch(()=>{
//     console.log(e, 'not connected')
// })
mongoose.connect('mongodb://localhost:27017/formTask')
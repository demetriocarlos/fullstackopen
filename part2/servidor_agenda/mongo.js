
const mongoose= require('mongoose')
const password = require('./Password')
//const {model,Schema} = mongoose

 

const connectionString = process.env.MONGO_DB_URI
 
mongoose.connect(connectionString,{
    //useNewUrlParser:true,
    //useUnifiedTopology:true,
    
    //useFindAndModify:false,
    //useCreateIndex:true
})
    .then(() =>{    
        console.log('database connect')
    }).catch(err =>{
        console.log(err)
    })



    //
 





/*
const personSchema = new Schema({
    name:String,
    number:String,
     
  })

  const Person = model('Person', personSchema)
*/
/*
Person.find({}).then(result => {
    console.log(result)
    mongoose.connection.close()
})
*/
/*
const person= new Person({
    name:'fiona',
    number:'564-980-566'
})


person.save()
    .then(result =>{
        console.log(result)
        mongoose.connection.close()
    })
    .catch(err =>{
        console.log(err)
    })
    
    */



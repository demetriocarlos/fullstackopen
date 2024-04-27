
/*
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
const port = 3001 || 3001;

server.use(middlewares);
server.use(router);

server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
   */

require('dotenv').config()

require('./mongo')


//const persons = require('./db.json')
const express = require('express')
const app = express()



const cors = require('cors');

const  Person = require('./models/Persons')
const NotFound = require('./middleware/NotFound')
const handleErrors = require('./middleware/handleErrors')


 
// Configuración de CORS
app.use(cors());

// Middleware para analizar el cuerpo de la solicitud JSON
app.use(express.json());

 /*
const app = http.createServer((request,response) => {
    response.writeHead(200, {'Content-Type' : 'application/json'})
    response.end(JSON.stringify(persons))
})
*/

app.get('/', (request,response) =>{
  response.send('<h1>Hello mundo</h1>')
})

app.get('/persons', (request,response) => {
     
    Person.find({}).then(pers => {
      response.json(pers)
    })
})


app.put('/persons/:id', (request,response, next) => {
  const {id} = request.params

  const person = request.body

  const newPersonInfo = {
          name: person.name,
          number: person.number
  }
  console.log("optiene el id")
  //actualizar resultado utilizando la id  
  Person.findByIdAndUpdate(id, newPersonInfo, { new: true })
          .then(result => {
                  response.json(result)
                  console.log(result)
          })

          console.log('actualisando el user')
})



/*
app.put('/persons/:id', async (request, response, next) => {
  try {
      const { id } = request.params;
      const person = request.body;

      // Valida que el cuerpo de la solicitud contenga tanto 'name' como 'number'
      if (!person.name || !person.number) {
          return response.status(400).json({ message: 'El nombre y el número son obligatorios' });
      }

      // Busca la persona por su ID
      const existingPerson = await Person.findById(id);

      if (!existingPerson) {
          return response.status(404).json({ message: 'Persona no encontrada' });
      }

      // Actualiza la información de la persona
      existingPerson.name = person.name;
      existingPerson.number = person.number;

      // Guarda la persona actualizada
      const updatedPerson = await existingPerson.save();

      return response.status(200).json({ message: 'Persona actualizada correctamente', person: updatedPerson });
  } catch (error) {
      console.error('Error al actualizar la persona:', error);
      return response.status(500).json({ message: 'Error interno del servidor' });
  }
});
*/



app.post('/persons', (request,response,next) => {
  const people = request.body
 
  if(!people || !people.name){
    return response.status(400).json({
       error:'people is missing'
    })
}
  const newPerson = new Person({
    name:people.name,
    number:people.number
  })

  newPerson.save().then(savedPerson => {
    response.json(savedPerson)
    console.log(savedPerson)
  } )

})

 

app.delete('/persons/:id', (request, response, next) => {
  const { id } = request.params;

  Person.findByIdAndDelete(id)
    .then(result => {
      if (result) {
        response.status(204).end(); // Envía la respuesta después de eliminar con éxito
      } else {
        response.status(404).json({ error: "Person not found" }); // Si no se encuentra la persona
      }
    })
    .catch(error => next(error));
});



 
app.use(NotFound)
app.use(handleErrors)


console.log('hola')
const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)   
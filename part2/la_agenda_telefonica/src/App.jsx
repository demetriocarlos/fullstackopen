import { useState } from 'react'
import { Filter } from './Components/Filter'
import { PersonForm } from './Components/PersonForm'
import { Persons } from './Components/Persons'


function App() {
    
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number:'125-678-980', id:1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  

  function generateRandomId() {
    return Math.floor(Math.random() * 1000000); // Genera un número aleatorio entre 0 y 999999
  }

  const addName = (event) => {
    event.preventDefault()
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} : is already added to phonebook`);
      return;
    }

      const newPerson = {
        name: newName,
        number: newNumber,
        id:generateRandomId()
        };

    setPersons([...persons, newPerson]);
    setNewName('');
    setNewNumber('');
  }



  const handleNoteChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
     
  }

const handleNumberChange= (event) => {
  //console.log(event.target.value)
  setNewNumber(event.target.value)
   
}

 


console.log(persons)

  return (
    <>
      <div>
          <h2>Phonebook</h2>
          
          <Filter persons={persons} />

          <br />
  
          <h2>add a new</h2>

          <PersonForm  
            addName={addName} 
            newName={newName} 
            handleNoteChange={handleNoteChange} 
            newNumber={newNumber}
            handleNumberChange={handleNumberChange}
          />
            <br />

          <h2>Numbers</h2>

          <Persons persons={persons}  />
      </div>
       
       

    </>
  )
}

export default App

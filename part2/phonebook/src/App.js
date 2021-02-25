import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const App = () => {
  const [ persons, setPersons ] = useState([
    {
      id:nanoid(), 
      name: 'Arto Hellas',
      number:'040-1234567' 
    }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber] = useState('')
  

  // Functions to handle input in textboxes
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  

  const submitNewContact = (event)=>{
    event.preventDefault();

    // Checking if contact already exists in phonebook
    if (persons.find(person => person.name===newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }
    
    //Update persons object with new contact details. generate new id. 
    setPersons(persons.concat([
      {
        id:nanoid(),
        name:newName,
        number:newNumber
      }
    ]));

    // clear text fields in the form
    setNewName('');
    setNewNumber('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitNewContact}>
        <table>
          <tbody>
            <tr>
              <td>
                Name:
              </td>
              <td>
                <input value={newName} onChange={handleNameChange}/>
              </td>
            </tr>
            <tr>
              <td>
                Number: 
              </td>
              <td>
                <input value={newNumber} onChange={handleNumberChange}/>
              </td>
            </tr>
            <tr>
              <td/>
              <td>
                <button type="submit">add</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person)=>{
          return (
            <span key={person.id}>
              <span>{person.name}</span>
              <br/>
            </span>
          )
        })}

      </div>
    </div>
  )
}

export default App
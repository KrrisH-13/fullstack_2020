import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const App = () => {
  const [ persons, setPersons ] = useState([
    {
      id:nanoid(), 
      name: 'Arto Hellas' 
    }
  ]) 
  const [ newName, setNewName ] = useState('')

  // Function to handle input in textbox for name 
  const handleNameChange = (event) =>{
    // console.log(event.target.value);
    setNewName(event.target.value);
  }

  const submitNewContact = (event)=>{
    event.preventDefault();
    // console.log('submitting form',newName);

    // Checking if contact already exists in phonebook
    if (persons.find(person => person.name===newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }
    
    //Update persons object with new contact details. generate new id. 
    setPersons(persons.concat([
      {
        id:nanoid(),
        name:newName
      }
    ]));

    // clear text fields in the form
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={submitNewContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
          {/* <div >debug: {newName}</div> */}
        </div>
        <div>
          <button type="submit">add</button>
        </div>
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
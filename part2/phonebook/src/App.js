import React, { useState } from 'react'
import { nanoid } from 'nanoid'
const App = () => {
  const [ persons, setPersons ] = useState([
    { id:nanoid(), name: 'Arto Hellas', number: '040-123456' },
    { id:nanoid(), name: 'Ada Lovelace', number: '39-44-5323523' },
    { id:nanoid(), name: 'Dan Abramov', number: '12-43-234345' },
    { id:nanoid(), name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);
  const [allContacts,setAllContacts] = useState([
    { id:nanoid(), name: 'Arto Hellas', number: '040-123456' },
    { id:nanoid(), name: 'Ada Lovelace', number: '39-44-5323523' },
    { id:nanoid(), name: 'Dan Abramov', number: '12-43-234345' },
    { id:nanoid(), name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]);

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber] = useState('');
  const [ searchPhrase, setSearchPhrase] = useState('');
  

  // Functions to handle input in textboxes
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  
  const handleSearchChange = (event) => {
    var query = event.target.value;
    setSearchPhrase(query);    
    filterContacts(allContacts, query);
  }
  
  //Function to filter names by search query.
  const filterContacts = (phonebook,query) => {
    // console.log(query);
    setPersons(phonebook.filter(person => person.name.toLowerCase().includes(query.toLowerCase())));
  }
  


  const submitNewContact = (event)=>{
    event.preventDefault();

    // Checking if contact already exists in phonebook
    if (allContacts.find(person => person.name===newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }
    var updatedPhonebook = allContacts.concat([
      {
        id:nanoid(),
        name:newName,
        number:newNumber
      }
    ]);
    //Update persons object with new contact details. generate new id. 
    setAllContacts(updatedPhonebook);

    // clear text fields in the form
    setNewName('');
    setNewNumber('');

    //Filter according to the search query
    filterContacts(updatedPhonebook, searchPhrase);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <h3>Add new contact</h3>
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
        Filter contacts shown with <input value={searchPhrase} onChange={handleSearchChange}/>
      </div>
      <div>
        <table>
          <tbody>
            {persons.length? persons.map((person)=>{
              return (
                <tr key={person.id}>
                  <td> {person.name} </td>
                  <td> {person.number} </td>
                </tr>
              )})
              :
              <tr>
                <td> No contacts matching searched filter. </td>
              </tr>
          }
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default App
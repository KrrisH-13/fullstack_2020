import React, { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import ContactFilter from './components/ContactFilter'
import NewContactForm from './components/NewContactForm'
import ContactList from './components/ContactList'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [allContacts,setAllContacts] = useState([]);

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber] = useState('');
  const [ searchPhrase, setSearchPhrase] = useState('');
  
  useEffect(() =>{
    console.log('in effect. component init');

    axios
      .get('http://localhost:3001/persons')
      .then( response => {
        console.log('got response from server');
        setAllContacts(response.data);
        setPersons(response.data);
      });
  },[])

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
      <NewContactForm 
        newName = {newName} 
        newNumber = {newNumber} 
        submitNewContact = {submitNewContact} 
        handleNameChange = {handleNameChange} 
        handleNumberChange = {handleNumberChange}/>

      <h2>Numbers</h2>
      <ContactFilter searchPhrase={searchPhrase} handleSearchChange={handleSearchChange}/>
      <ContactList persons={persons}/>
    </div>
  )
}
export default App
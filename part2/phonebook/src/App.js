import React, { useState, useEffect } from 'react'
import ContactFilter from './components/ContactFilter'
import NewContactForm from './components/NewContactForm'
import ContactList from './components/ContactList'
import phonebookService from './services/phonebook'


const App = () => {
  const [ persons, setPersons ] = useState([]);
  const [allContacts,setAllContacts] = useState([]);

  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber] = useState('');
  const [ searchPhrase, setSearchPhrase] = useState('');
  
  useEffect(() =>{
    phonebookService
      .getAll()
      .then((data)=>{
        setAllContacts(data);
        setPersons(data);
      })
      .catch(error =>{
        console.log('Error in HTTP request'+error)
        alert('cannot contact server.')
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
    var newContact = { name:newName, number:newNumber};

    phonebookService
      .addContact(newContact)
      .then((createdContact) =>{
        var updatedPhonebook = allContacts.concat([createdContact])
        //Update persons object with new contact details. generate new id. 
        setAllContacts(updatedPhonebook);
        // clear text fields in the form
        setNewName('');
        setNewNumber('');
    
        //Filter according to the search query
        filterContacts(updatedPhonebook, searchPhrase);
      })
      .catch(error =>{
        console.log('Error in HTTP request'+error);
        alert('cannot contact server. Could not create contact');
      });



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
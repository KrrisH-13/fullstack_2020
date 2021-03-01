import axios from 'axios';
const baseApiUrl = 'http://localhost:3001';

const getAll = () => {
    const req = axios.get(baseApiUrl+'/persons');
    return req.then(response => response.data);
}

const addContact = (newContact)=>{
    const req = axios.post(baseApiUrl+'/persons',newContact);
    return req.then(response => response.data);
}

const phonebookService = { getAll, addContact };

export default phonebookService;
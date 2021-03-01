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

const deleteContact = (id)=>{
    const req = axios.delete(baseApiUrl + '/persons/' + id);
    return req.then(req.data);
}

const phonebookService = { getAll, addContact, deleteContact };

export default phonebookService;
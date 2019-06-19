import axios from 'axios';
const API_URL = 'http://localhost:3004';
export class APIService{

constructor(){
}

    getContacts() {
        console.log("in getContacts");
        const url = `${API_URL}/employees/`;
        return axios.get(url).then(response => response.data);
    }
    getContact(contact) {
        const url = `${API_URL}/employees/${contact}`;
        return axios.get(url).then(response => response.data);
    }
    deleteContact(contact){
        const url = `${API_URL}/employees/${contact}`;
        return axios.delete(url);
    }
    createContact(contact){
        const url = `${API_URL}/employees/`;
        return axios.post(url,contact);
    }
    updateContact(contact,data){
        console.log("in updateContact");
        const url = `${API_URL}/employees/${contact}`;
        console.log(axios.put(url,data));
        return axios.put(url,data);
    }
}
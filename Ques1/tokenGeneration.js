import axios from 'axios';

const obj = {
    "companyName": "GLA UNIVERSITY",
    "clientID": "ac2e297e-c9b1-4a9b-bb35-88bdd3140649",
    "clientSecret": "dfIjVIwcLspmThHP",
    "ownerName": "Rohit Kumar Dwivedi",
    "ownerEmail": "rohit.dwivedi_cs21@gla.ac.in",
    "rollNo": "2115000873"
  }
;

export const getToken = async () => {
    try {
        const response = await axios.post("http://20.244.56.144/test/auth", obj);
        return response.data.access_token; 
    } catch (error) {
        console.error('Error fetching token:', error.message || error);
        throw error;
    }
};
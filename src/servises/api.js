import axios from 'axios';

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "40285676-751807e61d49ed3d514893f9d";

export async function fetchData(q, page) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: q,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 12,
        page: page,
    });
    
try {
    const response = await axios.get(`${BASE_URL}?${params}`)
    const data = await response.data; 
    console.log(data);
    
    return data; 

} catch (error) {
    console.log(error.message)
}  
}  

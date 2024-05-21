import axios from "axios";
const subscribe = async () => 
    {
    try {
        // Replace 'your-backend-endpoint' with the actual endpoint from which you want to fetch data
        const response = await axios.post('http://localhost:8000/api/stripe');
        window.location.href = response.data;
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}

export {subscribe}
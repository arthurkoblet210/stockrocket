import axios from "axios";
const getStockData = async (symbol = "", apiKey = "") => {
    const endpoint = `https://api.twelvedata.com/quote?symbol=${symbol}&apikey=${apiKey}`;

    try {
        const response = await axios.get(endpoint);
        // console.log(response.data);
        return response.data; // The data you're interested in
        
    } catch (error) {
        console.error("Error fetching stock data:", error); 
        return null; // Handle error appropriately
    }
};

export default getStockData;
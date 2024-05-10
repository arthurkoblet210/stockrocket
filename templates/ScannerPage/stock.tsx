import axios from 'axios';

const getInitialValue = async () => {
  const endpoint = `https://api.twelvedata.com/stocks?exchange=NASDAQ&apikey=demo`;
  try {
    const response = await axios.get(endpoint);
    //console.log(response.data.data);
    return response.data.data; // Return the data directly
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null; // Return null in case of an error
  }
};


export  {getInitialValue};

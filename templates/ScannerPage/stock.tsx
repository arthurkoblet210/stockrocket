import axios from 'axios';


const getInitialValue = async () => {
  const endpoint = `https://api.twelvedata.com/stocks?exchange=NASDAQ&apikey=${process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY}`;
  try {
    // console.log(process.env.TWELVE_DATA_API_KEY);
    const response = await axios.get(endpoint);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching stock data:", error);
    return null; // Return null in case of an error
  }
};


const stockPrice = (symbol = "AAPL") => {

  // Create a WebSocket connection to the Twelve Data endpoint
  const ws = new WebSocket(`wss://ws.twelvedata.com/v1/quotes/price?apikey=${process.env.NEXT_PUBLIC_TWELVE_DATA_API_KEY}`);


  // Event listener for when the WebSocket connection is open
  ws.onopen = () => {
    // Subscribe to the symbol
    ws.send(JSON.stringify({
      "action": "subscribe",
      "params": {
        "symbols": "AAPL,RY,RY:TSX,EUR/USD,BTC/USD"
      }
    }));
    //console.log("open", symbol);
  };

  // Event listener for when a message is received from the WebSocket server
  ws.onmessage = (event) => {
    const response = JSON.parse(event.data);
    console.log(response)
    // Check if the message contains price data for the requested symbol
  };

  // Event listener for WebSocket errors
  ws.onerror = (error) => {
    console.error('WebSocket error:', error);
  };

  // Clean up the WebSocket connection when the component unmounts
  return () => {
    if (ws.readyState === WebSocket.OPEN) {
      // Unsubscribe before closing the connection
      ws.send(JSON.stringify({
        "action": "subscribe",
        "params": {
          "symbols": "AAPL,RY,RY:TSX,EUR/USD,BTC/USD"
        }
      }));
      ws.close();
    }
  };
  // Dependencies for the useEffect hook

};



export { getInitialValue, stockPrice }; 

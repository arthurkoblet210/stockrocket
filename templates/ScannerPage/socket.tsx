import { useEffect, useState } from 'react';

const Home = () => {
  const [price, setPrice] = useState('Loading...');

  useEffect(() => {
    // Replace 'YOUR_TWELVEDATA_API_KEY' with your Twelve Data API Key
    const apiKey = '46f4bea5f0684accb3397d3fcba0b3b1';
    const symbol = 'AAPL'; // Example: Apple Inc

    const ws = new WebSocket(`wss://ws.twelvedata.com/v1/quotes/price?apikey=${apiKey}&symbol=${symbol}`);

    ws.onopen = () => {
      console.log('WebSocket Connected');
      ws.send(JSON.stringify({
        "action": "subscribe",
        "params": {
          "symbols": symbol,
          "fields": ["symbol", "price"]
        }
      }));
    };

    ws.onmessage = (event) => {
      const response = JSON.parse(event.data);
      if (response.data) {
        const { price: latestPrice } = response.data[0]; // Assuming the response data structure
        setPrice(latestPrice);
        console.log(response.data);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket Error:', error);
      setPrice('Error fetching price');
    };

    ws.onclose = () => {
      console.log('WebSocket Disconnected');
    };

    // Clean up function to close the WebSocket connection when the component unmounts
    return () => {
      ws.close();
    };
  }, []);

  return (
    <div>
      <h1>Real-time Price Data with Twelve Data</h1>
      <p>Current Price: {price}</p>
    </div>
  );
}


export { Home }
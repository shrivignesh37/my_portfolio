import React, { useState, useEffect } from 'react';
import './App.css';
import Homepage from './components/Homepage.js';
import LoadingPage from './components/Loading.jsx';  // Create a LoadingPage component

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) that takes time
    setTimeout(() => {
      setIsLoading(false);  // Set loading state to false after the operation is done
    }, 2000  );  // You can adjust the timeout duration based on your needs
  }, []);

  return (
    <div className="App">
      {isLoading ? (
        <LoadingPage />
      ) : (
        <Homepage />
      )}
    </div>
  );
}

export default App;

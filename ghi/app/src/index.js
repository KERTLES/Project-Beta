import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);



async function loadModels() {
  const response = await fetch('http://localhost:8100/api/models/');
  if (response.ok){
    const data = await response.json(); 
    console.log(data)
    root.render(<React.StrictMode> 
      <App models={data.models}/>
    </React.StrictMode>)
  } else {
    console.error(response)
  }
}

loadModels()
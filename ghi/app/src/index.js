import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));



async function loadInventory() {
  let modelData, manufacturerData
  const modelResponse = await fetch('http://localhost:8100/api/models/');
  const manufacturerResponse = await fetch("http://localhost:8100/api/manufacturers/");

  if (modelResponse.ok) {
    modelData = await modelResponse.json();
    console.log('model data:', modelData)
  } else {
    console.error(modelResponse)
  }
  if (manufacturerResponse.ok) {
    manufacturerData = await manufacturerResponse.json();
    console.log('manufacturer data: ', manufacturerData)
  } else {
    console.error(manufacturerResponse)
  }
  root.render(
    <React.StrictMode>
      <App models={modelData} manufacturers={manufacturerData} />
    </React.StrictMode>
  )
}
loadInventory();


// async function loadModels() {
//   const response = await fetch('http://localhost:8100/api/models/');
//   if (response.ok){
//     const data = await response.json(); 
    
//     root.render(<React.StrictMode> 
//       <App models={data.models}/>
//     </React.StrictMode>)
//   } else {
//     console.error(response)
//   }
// }

// loadModels()

// async function loadManufacturers() {
//   const response = await fetch("http://localhost:8100/api/manufacturers/")
//   if (response.ok) {
//     const data = await response.json();
//     root.render(
//       <React.StrictMode>
//         <App manufacturers={data.manufacturers} />
//       </React.StrictMode>
//     );
//   } else {
//     console.error(response);
//   }
// }
// loadManufacturers();

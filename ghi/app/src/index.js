import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


// async function loadAutoMobiles() {
//     const response = await fetch('http://localhost:8100/api/automobiles/');
//   if (response.ok){
//     const data = await response.json(); 
//     console.log(data)
    
//     root.render(
   
//     <React.StrictMode> 
//       <App autos={data.autos}/>
//     </React.StrictMode>)
//   } else {
//     console.error(response)
//   }
// }

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// loadAutoMobiles()


// async function loadModels() {
//   const response = await fetch('http://localhost:8100/api/models/');
//   if (response.ok){
//     const data = await response.json(); 
//     console.log(data)
//     root.render(<React.StrictMode> 
//       <App models={data.models}/>
//     </React.StrictMode>)
//   } else {
//     console.error(response)
//   }
// }

// loadModels()


root.render(
<React.StrictMode>
  <App />
</React.StrictMode>
);

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ListModels from './ListModels';
import ManufacturerList from './ManufacturerList';
import ManufacturerCreateForm from './ManufacturerCreateForm';
import AutomobileInventoryList from './AutomobileInventoryList';
import CreateTechnicianForm from './CreateTechnicianForm';
import Nav from './Nav';
import ModelForm from './CreateModelForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="models" element={<ListModels models={props.models} />} />
          {<Route path="models/new" element={<ModelForm/>} />}
          <Route path="/" element={<MainPage />} />
          <Route path="manufacturer">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />} />
            <Route path="new" element={<ManufacturerCreateForm />}/>
          </Route>
          <Route path='inventory'>
            <Route index element={<AutomobileInventoryList automobiles={props.automobiles} />}/>
          </Route>
          <Route path="technician" element={<CreateTechnicianForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

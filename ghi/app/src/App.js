import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ListModels from './ListModels';
import ManufacturerList from './ManufacturerList';
import ManufacturerCreateForm from './ManufacturerCreateForm';
import AutomobileInventoryList from './AutomobileInventoryList';
import CreateTechnicianForm from './CreateTechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import AppointmentList from './AppointmentList';
import ServiceHistory from './ServiceHistory';
import Nav from './Nav';
import ModelForm from './CreateModelForm';
import ListAuto from './ListAuto';
import CreateAutoForm from './CreateAutoForm'


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models" element={<ListModels models={props.models} />} />
          <Route path="models/new" element={<ModelForm />} />
         
          <Route path="manufacturer">
          <Route index element={<ManufacturerList manufacturers={props.manufacturers} />} />
          <Route path="new" element={<ManufacturerCreateForm />} />
          </Route>
          <Route path="auto/" index element={<ListAuto autos={props.autos} />} />
          <Route path="inventory/create" element={<CreateAutoForm />} />
          <Route path='inventory'>
            <Route index element={<AutomobileInventoryList automobiles={props.automobiles} />}/>
          </Route>
          <Route path='service'>
            <Route path="technician" element={<CreateTechnicianForm />} />
            <Route path='new' element={<ServiceAppointmentForm />} />
            <Route path='list' element={<AppointmentList />} />
            <Route path='history' element={<ServiceHistory />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ListModels from './ListModels';
import ManufacturerList from './ManufacturerList';
import ManufacturerCreateForm from './ManufacturerCreateForm';
import AutomobileInventoryList from './AutomobileInventoryList';
import CreateTechnicianForm from './CreateTechnicianForm';
import ServiceAppointmentForm from './ServiceAppointmentForm';
import Nav from './Nav';
import ModelForm from './CreateModelForm';
import ListAuto from './ListAuto';
import CreateAutoForm from './CreateAutoForm'
import CustomerForm from './CreateCustomerForm';
import CreateSalesPersonForm from './CreateSalesPersonForm';
import ListSales from './ListSales';
import SalesHistory from './SalesPersonHistory';


function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="models" element={<ListModels models={props.models} />} />
          <Route path="models/new" element={<ModelForm />} />
          <Route path="customers/create" element={<CustomerForm />} />
          <Route path="salesmen/create" element={<CreateSalesPersonForm />} />
          <Route path="manufacturer">
            <Route index element={<ManufacturerList manufacturers={props.manufacturers} />} />
            <Route path="new" element={<ManufacturerCreateForm />} />
          </Route>
          <Route path="auto/" index element={<ListAuto autos={props.autos} />} />
          <Route path="inventory/create" element={<CreateAutoForm />} />
          <Route path='inventory'>
            <Route index element={<AutomobileInventoryList automobiles={props.automobiles} />} />
          </Route>
          <Route path="sales/list" index element={<ListSales />} />
          <Route path='salesperson/history/' element={<SalesHistory />} />
          <Route path='service'>
            <Route path="technician" element={<CreateTechnicianForm />} />
            <Route path='new' element={<ServiceAppointmentForm />} />

          </Route>

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

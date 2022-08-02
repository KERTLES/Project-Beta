import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import ListModels from './ListModels';
import Nav from './Nav';
import ModelForm from './CreateModelForm';

function App(props) {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container">
        <Routes>
          {/* <Route path="/" element={<MainPage />} /> */}
          {/* <Route path="models" element={<ListModels models={props.models} />} /> */}
          {<Route path="models/new" element={<ModelForm/>} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

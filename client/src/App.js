import './App.css';
import { Routes, Route} from 'react-router-dom';
import MainPage from './views/MainPage';
import OneProduct from './views/OneProduct';
import UpdateProduct from './views/UpdateProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={< MainPage/>} />
        <Route path='/:id' element={< OneProduct/>} />
        <Route path='/:id/edit' element={<UpdateProduct />} />
      </Routes>
    </div>
  );
}

export default App;

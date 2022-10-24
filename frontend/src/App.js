
import './App.css';
import NavBar from './components/NavBar'
import AllUser from './components/AllUser'
import CrudApp from './components/CrudApp'
import AddUser from './components/AddUser'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <NavBar />
      <Routes>
        <Route path='/' element={<CrudApp />} />
        <Route path='/all' element={<AllUser />} />
        <Route path='/add' element={<AddUser />} />
      </Routes>
     
    </BrowserRouter>
  );
}

export default App;

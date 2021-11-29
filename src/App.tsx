import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {Button} from './components/Button'
import { Home } from './pages/Home';
import { NewRom } from './pages/NewRom';


function App() {
  return (
    <BrowserRouter>
    
    <Routes>
    <Route path="/"  element={<Home/>} />
    <Route path="/rooms/new" element={<NewRom/>} />
    </Routes>
    
    
    </BrowserRouter>
  
  );
}

export default App;

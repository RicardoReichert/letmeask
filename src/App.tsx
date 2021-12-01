
import { BrowserRouter,Routes, Route } from 'react-router-dom';
// import {Button} from './components/Button'
import { Home } from './pages/Home';
import { NewRom } from './pages/NewRom';
import {Room} from './pages/Room';





import { AuthContextProvider} from './context/AuthContext'
import { AdminRoom } from './pages/AdminRom';
function App() {

  return (
    <BrowserRouter>
    
    <Routes>
    
    <Route path="/"  element={<Home/>} />
    <Route path="/rooms/new" element={<NewRom/>} />
    <Route path="/rooms/:id" element={<Room/>} />
    <Route path="/admin/rooms/" element={<AdminRoom/>} />
    </Routes>
    
    
    </BrowserRouter>
  
  );
}

export default App;

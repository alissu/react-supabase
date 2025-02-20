import { BrowserRouter, Routes, Route } from 'react-router';
import Login from './pages/login';
import Register from './pages/register';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import './App.css'

function App() {
  return (<BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </BrowserRouter>)
}

export default App

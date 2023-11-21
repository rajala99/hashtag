
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Hashtag_Login from './Pages/Hashtag_Login';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Hashtag_Login" element={<Hashtag_Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

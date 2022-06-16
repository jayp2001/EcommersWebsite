import React from 'react';
import { BrowserRouter ,Route,Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<Login />} />
        {/* <Route path='/users' exact element={<UserList />} />
        <Route path='/edit/:id' exact element={<EditExercise />} />
        <Route path='/create' exact element={<AddExercise />} />
        <Route path='/users/create' exact element={<AddUser />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

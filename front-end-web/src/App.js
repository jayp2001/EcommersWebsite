import React from 'react';
import { BrowserRouter ,Route,Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import LoginWrapper from './pages/login/loginWrapper';
import DeskBoard from './pages/deskbord/deskboard';
import ProductDetail from './pages/productdetail/productDetail';
import ProductListElectric from './pages/productList/productListElectric';
import ProductListFashion from './pages/productList/productListFashion';
import Nevbar from './navBar/navBar';
import AdminForms from './pages/admin/pages/adminForm';
import AdminProfile from './pages/admin/pages/adminProfile';
import AddCart from './pages/Cart/cart';
import GoogleDrive from './driveUpload';
import './App.css';

function App() {
  return (
    <>
   
    <BrowserRouter>
    <Nevbar />
      <Routes>
        <Route path='/' exact element={<LoginWrapper />} />
        <Route path='/forgotPwd' element={<LoginWrapper />} />
        <Route path='/signUp' element={<LoginWrapper />} />
        <Route path='/resetPwd' element={<LoginWrapper />} />
        <Route path='/deskBoard' element={<DeskBoard />} />
        <Route path='/product/:id/:type' element={<ProductDetail />} />
        <Route path='/electric' element={<ProductListElectric />} />
        <Route path='/fashion' element={<ProductListFashion />} />
        <Route path='/admin/addProduct' element={<AdminForms />} />
        <Route path='/admin/editProduct/:id/:type' element={<AdminForms />} />
        <Route path='/admin/adminProfile' element={<AdminProfile />} />
        <Route path='/cart' element={<AddCart/>} />
        <Route path='/drive' element={<GoogleDrive />} />
        {/* <Route path='/users' exact element={<UserList />} />
        <Route path='/edit/:id' exact element={<EditExercise />} />
        <Route path='/create' exact element={<AddExercise />} />
        <Route path='/users/create' exact element={<AddUser />} /> */}
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

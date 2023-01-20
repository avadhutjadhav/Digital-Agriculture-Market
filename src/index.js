import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore } from 'redux';
import FarmerReducer from './redux/reducer/Farmerreducer';
import { Provider } from 'react-redux';


//npm i  bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';


import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Registration from './components/Registration';
import Pagenotfound from './components/Pagenotfound';
import AboutUs from './components/AboutUs';
import Contactus from './components/Contactus';
import FarmerLogin from './components/FarmerLogin';
import ForgotPassword from './components/ForgotPassword';
import Farmer from './components/Farmer';
import Farmerdashboard from './components/Farmerdashboard';
import AddProducts from './components/AddProducts';
import TodaysRates from './components/TodaysRates';
import Vendor from './components/Vendor';
import VendorLogin from './components/VendorLogin';
import Vendordashboard from './components/Vendordashboard';
import Logout from './components/Logout';
import Profile from './components/Profile';
import ShowOngoingLot from './components/ShowOngoingLot';
import Gallery from './components/Gallery';
import { ToastContainer } from 'react-toastify';
import Logistics from './components/Logistics';
import Update from "./components/Update"
import SeefOrders from './components/SeefOrders';
import Seemaxbids from './components/Seemaxbids';
import Finalorders from './components/Finalorders';
import Seevorders from './components/Seevorders';
import Finalbids from './components/Finalbids';
import Seefeedback from "./components/Seefeedback"



import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

const farmerStore = createStore(FarmerReducer,composeWithDevTools());

var record = (
    <>
        <Provider store={farmerStore}>
      <BrowserRouter>
      <ToastContainer />
        <Header />
        
          <Routes>
          <Route path='/Seefeedback' element={<Seefeedback />}></Route>
          <Route path='/Seemaxbids/:fpid' element={<Seemaxbids />}></Route>
          <Route path='/Finalorders/:fid' element={<Finalorders />}></Route>
          <Route path='/Seevorders' element={<Seevorders />}></Route>
          <Route path='/Finalbids/:vendorid' element={<Finalbids />}></Route>
          <Route path='/SeefOrders' element={<SeefOrders />}></Route>
          <Route path='/Logistics' element={<Logistics />}></Route>
          <Route path='/Update' element={<Update />}></Route>
          <Route path='/Gallery' element={<Gallery />}></Route>
          <Route path='/ShowOngoingLot' element={<ShowOngoingLot />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/Logout' element={<Logout />}></Route>
          <Route path='/Vendordashboard' element={<Vendordashboard />}></Route>
          <Route path='/VendorLogin' element={<VendorLogin />}></Route>
          <Route path='/Vendor' element={<Vendor />}></Route>
          <Route path='/TodaysRates' element={<TodaysRates />}></Route>
          <Route path='/AddProducts' element={<AddProducts />}></Route>
              <Route path='/' element={<Home />}></Route>
              <Route path='/homepage' element={<Home />}></Route>
              <Route path='/Login' element={<Login />}></Route>
              <Route path='/Registration' element={<Registration />}></Route>
              <Route path='/Contactus' element={<Contactus />}></Route>
              <Route path='/AboutUs' element={<AboutUs />}></Route>
              <Route path='/Pagenotfound' element={<Pagenotfound />}></Route>
              <Route path='/farmerlogin' element={<FarmerLogin />}></Route>
              <Route path='/forgotpass' element={<ForgotPassword />}></Route>
              <Route path='/Farmer' element={<Farmer />}></Route>
              <Route path='/Farmerdashboard' element={<Farmerdashboard />}></Route>
          </Routes>
        <Footer />
      </BrowserRouter></Provider>
    </>
)
ReactDOM.render(
  record,
  document.querySelector('#root')
);
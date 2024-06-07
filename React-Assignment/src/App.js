import {ToastContainer} from 'react-toastify'
import Register from './components/screens/Register'
import 'react-toastify/dist/ReactToastify.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/screens/login';
import Home from './components/screens/Home';
import Properties from './components/screens/Properties';
import AddProperty from './components/screens/AddProperty';
import PropertyDetails from './components/PropertyDetails';
import LoginUser from './user/LoginUser';
import RegisterUser from './user/RegisterUser';
import HomeUser from './user/HomeUser';
import PropertyUser from './user/PropertyUser';
import PropertyDetailUser from './user/PropertyDetailUser';
import PropertyBook from './user/PropertyBook';
import Counter from './component/counter'
function App() {
  return (
    <div>
      <Routes>
      <Route path='' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='properties' element={<Properties/>}/>
        <Route path='add-property' element={<AddProperty/>}/>
        <Route path='property-details' element={<PropertyDetails/>}/>
        <Route path='login-user' element={<LoginUser/>}/>
        <Route path='registerUser' element={<RegisterUser/>}/> 
        <Route path='homeUser' element={<HomeUser/>}/> 
        <Route path='propertyUser' element={<PropertyUser/>}/> 
        <Route path='property-details-user' element={<PropertyDetailUser/>}/> 
        <Route path='propertyBook' element={<PropertyBook/>}/> 
        <Route path='reduxx' element={<Counter/>}/> 

      </Routes>
      <ToastContainer/>
    </div>
    
  );
}

export default App;

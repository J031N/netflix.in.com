import React from 'react';
import Home from './Pages/Home/Home';
import SignUp from './Pages/SignUp/SignUp';
import {BrowserRouter , Routes, Route} from 'react-router-dom'
import './App.css'
import Login from './Pages/Login/Login';
import Lock from './Pages/Lock/Lock';
import Teaser from './Pages/Trailer/Teaser';
import firebase from './Firebase/config'
import { FirebaseContext } from './Store/FirebaseContext';

import BannerTrailer from './Pages/Trailer/BannerTrailer';
function App() {
  return (
    <div className="App">
    <FirebaseContext.Provider value={{ firebase }}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignUp/>}  />
        <Route path='/netflix.in.com' element={<SignUp/>}  />  
        <Route path='/signup' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/signin' element={<Lock/>}/>
        <Route path='/teaser' element={<Teaser/>}/>
        <Route path='/Bteaser' element={<BannerTrailer/>}/>
      </Routes>
    </BrowserRouter>
    </FirebaseContext.Provider>
    </div>
  );
}

export default App;

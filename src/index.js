import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

// import {Posts} from './Post'

import reportWebVitals from './reportWebVitals';
import Blog from './Blog';
import AdminPanel from './AdminPanel';
import AdminLogin from './AdminLogin';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Blog/>}/>
      <Route path='AdminPanel' element={<AdminPanel/>}/>
      <Route path='AdminLogin' element={<AdminLogin/>}/>
    </Routes>
    
  </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//import './components/AppChart';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import App from './components/Mainbar';
//import Sidebar from './components/sidebar/sidebar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Page1 from './pages/Page1';
import Mainbar from './components/Mainbar';


window.api.messageApi.receive("fromMain", (message: any) => {
  console.log(message);
});

window.api.messageApi.send("toMain", "Hello World");

const app = (
  //<Layout />
  <BrowserRouter>
    <Routes>
      <Route path="/main_window" element={<Mainbar />} />
      <Route path="/page-1" element={<Page1 />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(app, document.getElementById("core"));

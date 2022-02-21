import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';

window.api.messageApi.receive("fromMain", (message: any) => {
  console.log(message);
});

window.api.messageApi.send("toMain", "Hello World");

const app = (
  <Layout />
);

ReactDOM.render(app, document.getElementById("core"));

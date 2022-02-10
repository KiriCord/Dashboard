import './components/App';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';

window.api.messageApi.receive("fromMain", (message: any) => {
  console.log(message);
});

window.api.messageApi.send("toMain", "Hello World");

const app = (
  <App />
);

ReactDOM.render(app, document.getElementById("core"));

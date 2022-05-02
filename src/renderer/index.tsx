import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';

window.api.messageApi.receive("fromMain", (message: any) => {
    console.log(message);
});

window.api.messageApi.send("toMain", "Hello World");

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const app = (
    <Layout />
);

root.render(app);

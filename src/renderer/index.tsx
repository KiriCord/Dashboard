import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './components/Layout';

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

const app = (
    <Layout />
);

root.render(app);

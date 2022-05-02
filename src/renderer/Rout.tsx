import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tables from "./pages/Tables";
import Charts from "./pages/Charts";
import Debits from "./pages/Debits";
import Navbar from "./components/navbar/Navbar";

const router = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Charts />} />
                <Route path="/debit" element={<Debits />} />
                <Route path="/table" element={<Tables />} />
                <Route path='*' element={<h1>204</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;
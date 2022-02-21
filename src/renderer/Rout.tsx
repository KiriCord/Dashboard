import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tables from "./pages/Tables";
import Charts from "./pages/Charts";
import Navbar from "./components/navbar/Navbar";

const Rout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/main_window" element={<Charts />} />
                <Route path="/page" element={<Tables />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;
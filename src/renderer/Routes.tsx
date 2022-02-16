import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Page1 from "./pages/Page1";
import Dashboard from "./pages/Dashboard";

const routes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/main_window" element={<Dashboard />} />
                <Route path="/page-1" element={<Page1 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routes;
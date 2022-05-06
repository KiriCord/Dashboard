import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tables from "./pages/Tables";
import Charts from "./pages/Charts";
import Debits from "./pages/Debits";
import Navbar from "./components/navbar/Navbar";
import { Mer } from './types';



const router = () => {
    const [mer, setMer] = useState([] as Mer[]);
    const fetchData = (wellId: string) =>
        fetch(`http://127.0.0.1:8000/mer/${wellId}`).then(req => req.json()).then(newMer => setMer(newMer));

    useEffect(() => {
        const eventSource = new EventSource("http://127.0.0.1:8000/events");
        eventSource.onmessage = event => {
            console.log(event.data)
            fetchData(event.data);
        }
        return () => eventSource.close();
    }, []);

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Charts />} />
                <Route path="/debit" element={<Debits data={mer} />} />
                <Route path="/table" element={<Tables />} />
                <Route path='*' element={<h1>204</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;
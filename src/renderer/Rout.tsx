import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tables from "./pages/Tables";
import { Charts } from "./pages/Charts";
import Debits from "./pages/Debits";
import Navbar from "./components/navbar/Navbar";
import TestCharts from './pages/TestCharts';
import { Mer } from './types';



const router = () => {
    const [isOnline, setOnline] = useState(false);
    const [mer, setMer] = useState([] as Mer[]);
    const [wellId, setWellId] = useState("");
    const fetchData = (wellId: string) =>
        fetch(`http://127.0.0.1:8000/mer/${wellId}`).then(req => req.json()).then(newMer => setMer(newMer));
    useEffect(() => {
        const eventSource = new EventSource("http://127.0.0.1:8000/events");
        eventSource.onerror = event => {
            setOnline(false);
        }

        eventSource.onmessage = event => {
            console.log(event.data);
            setOnline(true)
            setWellId(event.data);
            fetchData(event.data);
        }
        return () => eventSource.close();


    }, []);

    return (
        <BrowserRouter>
            <Navbar isOnline={isOnline} />
            <Routes>
                <Route path="/" element={<Charts isOnline={isOnline} />} />
                <Route path="/debit" element={<Debits data={mer} WellId={wellId} />} />
                <Route path="/table" element={<Tables />} />
                <Route path="/test" element={<TestCharts />} />
                <Route path='*' element={<h1>204</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;
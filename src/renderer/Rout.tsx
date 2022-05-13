import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Tables from "./pages/Tables";
import { AllCharts } from "./pages/AllCharts";
import Debits from "./pages/Debits";
import Navbar from "./components/navbar/Navbar";
import TestCharts from './pages/TestCharts';
import { Mer, MerSumCum, Trinj } from './types';



const router = () => {
    const [isOnline, setOnline] = useState(false);
    const [mer, setMer] = useState([] as Mer[]);
    const [wellId, setWellId] = useState("");
    const [merSumCum, setMerSumCum] = useState([] as MerSumCum[]);
    const [trinj, setTrinj] = useState([] as Trinj[]);

    const updateView = [
        (wellId: string) =>
            fetch(`http://127.0.0.1:8000/mer/${wellId}`).then(req => req.json()).then(newMer => setMer(newMer)),
        (wellId: string) =>
            fetch(`http://127.0.0.1:8000/mersumcum/${wellId}`).then(req => req.json()).then(newMerSumCum => setMerSumCum(newMerSumCum)),
        (wellId: string) =>
            fetch(`http://127.0.0.1:8000/trinj/${wellId}`).then(req => req.json()).then(newTrinj => setTrinj(newTrinj)),
        setWellId,
        console.log,
    ];

    useEffect(() => {
        const eventSource = new EventSource("http://127.0.0.1:8000/events");
        eventSource.onerror = event => {
            setOnline(false);
        }

        eventSource.onmessage = event => {
            setOnline(true)
            updateView.map(f => f(event.data));
        }
        return () => eventSource.close();
    }, []);

    return (
        <BrowserRouter>
            <Navbar isOnline={isOnline} />
            <Routes>
                <Route path="/" element={<AllCharts dataMer={mer} dataMerSumCum={merSumCum} WellId={wellId} isOnline={isOnline} />} />
                <Route path="/debit" element={<Debits dataMer={mer} WellId={wellId} isOnline={isOnline} />} />
                <Route path="/table" element={<Tables dataMer={mer} WellId={wellId} isOnline={isOnline} />} />
                <Route path="/test" element={<TestCharts dataMer={mer} WellId={wellId} isOnline={isOnline} />} />
                <Route path='*' element={<h1>204</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;
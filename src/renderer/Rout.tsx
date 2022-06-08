import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MerTable from "./pages/MerTable";
import { AllCharts } from "./pages/AllCharts";
import OilCharts from "./pages/OilCharts";
import Navbar from "./components/navbar/Navbar";
import GasCharts from './pages/GasCharts';
import { Mer, Troil, Trinj } from './types';
import LiqCharts from './pages/LiqCharts';

const router = () => {
    const [isOnline, setOnline] = useState(false);
    const [wellId, setWellId] = useState("");
    const [mer, setMer] = useState([] as Mer[]);
    const [trinj, setTrinj] = useState([] as Trinj[]);
    const [troil, setTroil] = useState([] as Troil[]);

    console.log('wellId', wellId)

    const updateView = [
        (wellId: string) =>
            fetch(`http://127.0.0.1:8000/mer/${wellId}`).then(req => req.json()).then(newMer => setMer(newMer)),
        // (wellId: string) =>
        //     fetch(`http://127.0.0.1:8000/trinj/${wellId}`).then(req => req.json()).then(newTrinj => setTrinj(newTrinj)),
        (wellId: string) =>
            fetch(`http://127.0.0.1:8000/troil/${wellId}`).then(req => req.json()).then(newTroil => setTroil(newTroil)),
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
                <Route path="/" element={<AllCharts dataMer={mer} WellId={wellId} isOnline={isOnline} dataTroil={troil} />} />
                <Route path="/charts/oil" element={<OilCharts dataMer={mer} WellId={wellId} isOnline={isOnline} />} />
                <Route path="/charts/gas" element={<GasCharts dataMer={mer} WellId={wellId} isOnline={isOnline} />} />
                <Route path="/charts/liq" element={<LiqCharts dataMer={mer} WellId={wellId} isOnline={isOnline} />} />
                <Route path="/table/mer" element={<MerTable dataMer={mer} WellId={wellId} isOnline={isOnline} />} />
                <Route path='*' element={<h1>204</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;
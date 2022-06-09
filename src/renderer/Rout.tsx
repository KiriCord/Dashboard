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
    const [oilfield, setOilfield] = useState("");

    console.log('wellId', wellId)
    console.log('oilfield', oilfield)

    const updateView = [
        (wellId: string) =>
            fetch(`http://127.0.0.1:8000/mer/${wellId}`).then(req => req.json()).then(newMer => setMer(newMer)),
        // (wellId: string) =>
        //     fetch(`http://127.0.0.1:8000/trinj/${wellId}`).then(req => req.json()).then(newTrinj => setTrinj(newTrinj)),
        (wellId: string) =>
            fetch(`http://127.0.0.1:8000/troil/${wellId}`).then(req => req.json()).then(newTroil => setTroil(newTroil)),
        (wellId: string) => setWellId(wellId),
        console.log,
    ];

    const updateOilfield = (oilfield: string) => {
        setOilfield(oilfield);
    }

    useEffect(() => {
        const eventSource = new EventSource("http://127.0.0.1:8000/events");
        eventSource.onerror = event => {
            setOnline(false);
        }

        eventSource.onmessage = event => {
            const data = JSON.parse(event.data)

            setOnline(true)
            updateView.map(f => f(data.wellId));
            updateOilfield(data.oilfield);
        }
        return () => eventSource.close();
    }, []);

    return (
        <BrowserRouter>
            <Navbar isOnline={isOnline} wellId={wellId} oilfield={oilfield} />
            <Routes>
                <Route path="/" element={<AllCharts dataMer={mer} wellId={wellId} oilfield={oilfield} isOnline={isOnline} dataTroil={troil} />} />
                <Route path="/charts/oil" element={<OilCharts dataMer={mer} wellId={wellId} oilfield={oilfield} isOnline={isOnline} />} />
                <Route path="/charts/liq" element={<LiqCharts dataMer={mer} wellId={wellId} oilfield={oilfield} isOnline={isOnline} />} />
                <Route path="/charts/gas" element={<GasCharts dataMer={mer} wellId={wellId} oilfield={oilfield} isOnline={isOnline} />} />
                <Route path="/table/mer" element={<MerTable dataMer={mer} wellId={wellId} oilfield={oilfield} isOnline={isOnline} />} />
                <Route path='*' element={<h1>204</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default router;
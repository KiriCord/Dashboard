import { contextBridge, ipcRenderer } from "electron";
import { Client } from './Client';

let client = new Client("ws://localhost:8999");
client.startWebSocket();

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel : any, data : any) => {
            let validChannels = ["toMain"];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: (channel : any, func : any) => {
            let validChannels = ["fromMain"];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        }
    }
);
import { contextBridge, ipcRenderer } from "electron";
import { Client } from './Client';

const messageApi = {
    send: (channel: string, data: any) => {
        return ipcRenderer.send(channel, data);
    },

    receive: (channel: string, func: any) => {
        ipcRenderer.on(channel, (_event, ...args) => func(...args));
    },
}

contextBridge.exposeInMainWorld('api', {
    messageApi,
})


/*
contextBridge.exposeInMainWorld("api", {
    send: (channel: any, data: any) => {
        const validChannels = ["toMain"];
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, data);
        }
    },
    receive: (channel: any, func: any) => {
        const validChannels = ["fromMain"];
        if (validChannels.includes(channel)) {
            ipcRenderer.on(channel, (event, ...args) => func(...args));
        }
    }
}
);
*/
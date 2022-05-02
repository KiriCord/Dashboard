import { contextBridge, ipcRenderer } from "electron";

console.log("Работает");

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

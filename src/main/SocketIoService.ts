import { Manager, io, Socket } from "socket.io-client";
import { ICommunication } from "./Interface/ICommunication";
import { ServerToClientEvents, ClientToServerEvents } from "./interface/ISocketIoService";


export class SocketIoService implements ICommunication {
    URL: string;
    Socket: Socket<ServerToClientEvents, ClientToServerEvents>;


    constructor(ioURL: string) {
        this.URL = ioURL;
        const manager = new Manager(this.URL);
        this.Socket = manager.socket("/");

        this.Socket.on('connect', () => {
            console.log("[Open] Соединение установлено");
        })

        this.Socket.on('disconnect', (reason) => {
            console.log('[Close] Соединение прервано');
            if (reason === "io server disconnect") {
                this.Socket.connect();
            }
        });

        this.Socket.on("connect_error", () => {
            console.log("[Error] Ошибка подключения");
            setTimeout(() => {
                this.Socket.connect();
            }, 1000);
        });
    }

    public onClose(listener: any) {
        this.Socket.on('disconnect', listener);
    }

    public onMessage(listener: any) {
        this.Socket.emit(listener);
    }

}
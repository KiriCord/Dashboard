import WebSocket from "ws";
import { ICommunication } from "./Interface/ICommunication";

export class Client implements ICommunication {

  URL: string;
  Socket: WebSocket;

  constructor(wsURL: string) {
    this.URL = wsURL;
    this.Socket = new WebSocket(this.URL);

    this.Socket.on('open', () => {
      console.log("[Open] Соединение установлено");
    });

    this.Socket.on('close', (e) => {
      console.log('[Close] Соединение прервано');
    });

    this.Socket.on('error', (error) => {
      console.log(`[Error] ${error.message}`);
    });
  }

  public onMessage(listener: (this: WebSocket, data: WebSocket.RawData, isBinary: boolean) => void) {
    this.Socket.on('message', listener);
  }

  /*public Mess() {

    socket.onopen = function (e) {
      console.log("[Open] Соединение установлено");
      //socket.send());
    }
  
    socket.onmessage = function (event) {  //TODO: Определение типа сообщений. 
      let message = JSON.parse(event.data as string);
      console.log('[Server]', message);
    };
  
    socket.onclose = function (event) {
      if (event.wasClean) {
        console.log(`[Close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
      } else {
        console.log('[Close] Соединение прервано');
        console.log('[Close] Попытка переподключения...');
        setTimeout(startWebSocket(), 5000);
      }
    };
  
    socket.onerror = function (error) {
      console.log(`[Error] ${error.message}`);
    };
  }*/
}
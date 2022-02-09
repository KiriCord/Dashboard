import WebSocket from "ws";
import { ICommunication } from "./Interface/ICommunication";

export class Client implements ICommunication {

     URL: string;

    constructor(wsURL: string) {
      this.URL = wsURL;
    }

    public startWebSocket() {
      var socket = new WebSocket(this.URL);

        socket.onopen = function(e) {
          console.log("[Open] Соединение установлено");
          //socket.send());
      }

      socket.onmessage = function(event) {
        let message = JSON.parse(event.data as string);
        console.log('[Server]', message);
      };
      
      socket.onclose = function(event) {
        if (event.wasClean) {
            console.log(`[Close] Соединение закрыто чисто, код=${event.code} причина=${event.reason}`);
        } else {
          console.log('[Close] Соединение прервано');
        }
      };
      
      socket.onerror = function(error) {
        console.log(`[Error] ${error.message}`);
      };
    } 
}
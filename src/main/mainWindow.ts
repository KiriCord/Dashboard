import { app, BrowserWindow, ipcMain } from 'electron';
import WebSocket from "ws";
import { Client } from './Client';

declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

let mainWin: BrowserWindow | null;

let testMsg = {
  event: "onClose",
  data: {
    a: 5,
    b: 7
  }
}

export function createMainWindow(): BrowserWindow {
  mainWin = new BrowserWindow({
    height: 1000,
    width: 1600,
    center: true,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
      nodeIntegration: false,
      contextIsolation: true
    },
  });

  mainWin.setMenuBarVisibility(false)

  mainWin.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWin.webContents.openDevTools();



  ipcMain.on("toMain", (event, data) => {

    let client = new Client("ws://localhost:8999");
    client.onMessage((message) => {
      let mess = JSON.parse(message.toString())
      mainWin?.webContents.send("fromMain", mess);
      console.log('[Server]', mess.data);
    });

    client.onClose(() => {
      mainWin?.webContents.send("fromMain", testMsg);
    })

    console.log(`[Renderer]${data}`);
  })


  mainWin.on('close', () => {
    mainWin = null;
    app.quit();
  });

  /*
  mainWin.hookWindowMessage(Number.parseInt("0x0232"), (wParam, lParam) => {
      console.log("Окно переместилось")
  })

  mainWin.hookWindowMessage(Number.parseInt("0x200"), (wParam, lParam) => {
      i++;
      console.log(i)
  })
  */

  //const menu = Menu.buildFromTemplate(templateMenu)
  //Menu.setApplicationMenu(menu)

  return mainWin;
}


/*
/*globalShortcut.register('Control+Alt+I', () => {
console.log("Test global keys")
})

mainWin.webContents.on("before-input-event", (event, input) => {
if(input.type == "keyDown" && input.control && input.key.toLowerCase() == 'i') {
 mainWin.setSize(512, 512);
  console.log("Нажатие клавиши Ctrl + i(англ раскладка)");
}
})
 
win.webContents.on('did-finish-load', () => {
win.webContents.send('maintToRenderer', MouseMove.getCursorScreenPoint())
});

ipcMain.on("maintToRenderer", (e, data) => {
data = "hello Renderer";
});
 
*/

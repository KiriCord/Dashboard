import { app, BrowserWindow } from 'electron';
import path from 'path';

declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

let mainWin: BrowserWindow | null;

export function createMainWindow(): BrowserWindow {
    mainWin = new BrowserWindow({
        height: 720,
        width: 1280,
        center: true,
        webPreferences: {
            preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
            nodeIntegration: false, 
            contextIsolation: true 
    },
});
    mainWin.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

    mainWin.webContents.openDevTools();

    regMainWinIPC();

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



function regMainWinIPC() {
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
  
}
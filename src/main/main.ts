import { app, BrowserWindow, globalShortcut, ipcMain, Menu, MenuItem, MenuItemConstructorOptions} from 'electron';
import {MouseMove} from './mouse';
import { templateMenu } from './menu';

let mainWindow: BrowserWindow | null;

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;

if (require('electron-squirrel-startup')) { 
  app.quit();
}

//let i = 0;

const createWindow = (): void => {
  mainWindow = new BrowserWindow({
    height: 720,
    width: 1280,
    center: true,
    webPreferences: {
      nodeIntegration: true, //Допступ к API-интерфейсам Node.js. ОПАСНО!
      contextIsolation: false, //
    }
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.webContents.openDevTools();
  
  mainWindow.on('closed', () => {
    mainWindow = null;
  });

/*
  mainWindow.hookWindowMessage(Number.parseInt("0x0232"), (wParam, lParam) => {
    console.log("Окно переместилось")
  })

  mainWindow.hookWindowMessage(Number.parseInt("0x200"), (wParam, lParam) => {
    i++;
    console.log(i)
  })
*/


  const menu = Menu.buildFromTemplate(templateMenu)
  Menu.setApplicationMenu(menu)

  mainWindow.webContents.on("before-input-event", (event, input) => {
    if(input.type == "keyDown" && input.control && input.key.toLowerCase() == 'i') {
      mainWindow.setSize(512, 512);
      console.log("Нажатие клавиши Ctrl + i(англ раскладка)");
    }
  })

};

app.whenReady().then(()=> {
  globalShortcut.register('Control+Alt+I', () => {
    console.log("Test global keys")
  })
})

app.on('ready', function() {
  createWindow();

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('maintToRenderer', MouseMove.getCursorScreenPoint())
  });

  /*ipcMain.on("maintToRenderer", (e, data) => {
    data = "hello Renderer";
  });*/
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

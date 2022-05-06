import * as path from 'path'
//import { format } from 'url'
import { app, BrowserWindow, ipcMain } from 'electron'
import { is } from 'electron-util'
import { Client } from './Client';
import { SocketIoService } from './SocketIoService';

let win: BrowserWindow | null = null

let testMsg = {
  event: "onClose",
  data: {
    a: 5,
    b: 7
  }
}

async function createWindow() {
  win = new BrowserWindow({
    width: 1600,
    height: 1000,
    minHeight: 600,
    minWidth: 650,
    center: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
    show: false,
  })

  const isDev = is.development;

  function urlFromComponents({ pathname = '/', protocol = 'https:', hostname = 'test', ...props } = {}) {
    const url = new URL('http://localhost:9080');
    url.protocol = protocol;
    url.hostname = hostname;
    url.pathname = pathname;
    return url;
  }


  if (isDev) {
    win.loadURL('http://localhost:9080')
  } else {
    win.loadURL(
      urlFromComponents({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
      }).toString(),
    )
  }

  ipcMain.on("toMain", (event, data) => {

    /*let client = new Client("ws://localhost:8999");
    client.onMessage((message: any) => {
      let mess = JSON.parse(message.toString())
      win?.webContents.send("fromMain", mess);
      console.log('[Server]', mess.data);
    });

    client.onClose(() => {
      win?.webContents.send("fromMain", testMsg);
    })

    console.log(`[Renderer]${data}`);*/
  })

  win.on('closed', () => {
    win = null
  })

  win.webContents.on('devtools-opened', () => {
    win!.focus()
  })

  win.on('ready-to-show', () => {
    win!.show()
    win!.focus()

    if (isDev) {
      win!.webContents.openDevTools();
    }
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (!is.macos) {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null && app.isReady()) {
    createWindow()
  }
})

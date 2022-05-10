import * as path from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import { is } from 'electron-util'

let win: BrowserWindow | null = null

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

  win.setMenuBarVisibility(false);

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

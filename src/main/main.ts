import * as path from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'
import { is } from 'electron-util'
import { format } from 'url'

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

  if (isDev) {
    win.loadURL('http://localhost:9080')
  } else {
    win.loadURL(
      format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
      }),
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

    // if (isDev) {
    win!.webContents.openDevTools();
    // }
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

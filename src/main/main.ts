import { app, BrowserWindow, globalShortcut } from 'electron';
import { MouseMove } from './mouse';
import { createMainWindow } from './mainWindow';
import { templateMenu } from './menu';

if (require('electron-squirrel-startup')) {
  app.quit();
}

app.whenReady().then(() => {

})

app.on('ready', createMainWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createMainWindow();
  }
});

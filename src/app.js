import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 400,
    fullscreenable: false,
    // resizable: false,
    titleBarStyle: 'hidden-inset'
  });

  // mainWindow.setMenu(null);

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});

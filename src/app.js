import {app, BrowserWindow, crashReporter, Menu} from 'electron';
import appMenu from './browser/menu/app-menu';

let mainWindow = null;
if (process.env.NODE_ENV === 'develop') {
  crashReporter.start();
  //appMenu.append(devMenu);
}

app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  //Menu.setApplicationMenu(appMenu);
  mainWindow = new BrowserWindow({
    width: 580,
    height: 365
  });

  mainWindow.loadURL(`file://${__dirname}/renderer/index.html`);
});

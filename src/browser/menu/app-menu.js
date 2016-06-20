import {app, Menu} from 'electron';

let template = [{
  label: 'Electron App',
  submenu: [
    {
      label: 'Quit',
      accelerator: 'Command+Q',
      click() {
        app.quit();
      }
    }
  ]
}];

let appMenu = Menu.buildFromTemplate(template);

export default appMenu;

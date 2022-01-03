
const templateMenu: Electron.MenuItemConstructorOptions[] = [{
    label: 'Test1',
    submenu: [
        { id: 'test1.1', label: 'Test1.1' },
        { id: 'test1.2', label: 'Test1.2' },
        { id: 'test1.3', label: 'Test1.3' },
    ]
  },
  {
    label: 'Test2',
    submenu: [
        { role: 'reload' },
        { role: 'undo'},
        { role: 'redo'}
    ]
  }
  ];




export {
    templateMenu
}
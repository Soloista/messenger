const {app, BrowserWindow} = require('electron')

let win

function createWindow () {
    win = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth: 1000,
        minHeight: 700
    });
    win.maximize();
    win.loadURL(`file://${__dirname}/index.html`);
    win.setMenu(null);
    win.webContents.openDevTools({mode: 'detach'});
    win.on('closed', () => {
        win = null
    });
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});
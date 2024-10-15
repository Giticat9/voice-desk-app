import {app, BrowserWindow} from 'electron'
import path from 'path';
import url from 'url';

let mainWindow: Electron.BrowserWindow | null = null;

const installExtensions = async () => {
    const installer = require('electron-devtools-installer')
    const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
    const extensions = ['REACT_DEVELOPER_TOOLS', 'REDUX_DEVTOOLS'];

    return Promise.all(
        extensions.map(name => installer.default(installer[name], forceDownload))
    ).catch(console.log);
}

const createWindow = async () => {
    if (process.env.NODE_ENV !== 'production') {
        await installExtensions();
    }

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            devTools: process.env.NODE_ENV !== 'production',
        },
    })

    mainWindow.setMenu(null);

    if (process.env.NODE_ENV === 'development') {
        process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1';
        mainWindow?.loadURL(`http://localhost:4000`)
    } else {
        mainWindow?.loadFile(url.format({
            pathname: path.resolve(__dirname, './index.html'),
            protocol: 'file:',
            slashes: true
        }))
    }

    if (process.env.NODE_ENV === 'development') {
        mainWindow.webContents.once('dom-ready', () => {
            mainWindow!.webContents.openDevTools();
        })
    }

    mainWindow?.on('closed', () => {
        mainWindow = null;
    })
}

app.on('ready', createWindow);
import {app, BrowserWindow} from 'electron'
import path from 'path';
import url from 'url';

let mainWindow: Electron.BrowserWindow | null = null;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    if (process.env.NODE_ENV === 'development') {
        mainWindow?.loadURL(`http://localhost:4000`)
    } else {
        mainWindow?.loadFile(url.format({
            pathname: path.resolve(__dirname, './index.html'),
            protocol: 'file',
            slashes: true
        }))
    }

    mainWindow?.on('closed', () => {
        mainWindow = null;
    })
}

app.on('ready', createWindow);
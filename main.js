const { app, BrowserWindow, ipcMain, dialog } = require('electron')

//create window
const createWindow = () => {
    const win = new BrowserWindow({
        width: 360,
        height: 540,
        frame: false,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    })

    win.setMenuBarVisibility(false);

    win.loadFile('index.html')
}

app.whenReady().then(() => {

    createWindow()

})

//logic for custom buttons
ipcMain.on("window-minimize", (event) => {
    BrowserWindow.getFocusedWindow().minimize();
})
ipcMain.on("window-close", (event) => {
    BrowserWindow.getFocusedWindow().close();
})

//file selection
ipcMain.handle('select-files', async (event) => {
    const result = await dialog.showOpenDialog({
        properties: ['openFile', 'multiSelections'],
        filters: [
            { name: 'Audio Files', extensions: ['mp3', 'wav', 'flac', 'm4a'] }
        ]
    });
    
    if (!result.canceled) {
        return result.filePaths;
    }
    return [];
});

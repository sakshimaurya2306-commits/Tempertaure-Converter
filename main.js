// const { app, BrowserWindow } = require("electron");

// function createWindow() {
//     const win = new BrowserWindow({
//         width: 480,
//         height: 700,
//         resizable: false,
//         autoHideMenuBar: true,
//         title: "Temperature Converter",

//         webPreferences: {
//             nodeIntegration: true,
//             contextIsolation: false
//         }
//     });

//     win.loadFile("index.html");
// }

// app.whenReady().then(() => {
//     createWindow();
// });

const { app, BrowserWindow } = require("electron");

function createWindow() {
    const win = new BrowserWindow({
        width: 900,
        height: 700,
        minWidth: 500,
        minHeight: 600,

        resizable: true,
        maximizable: true,
        minimizable: true,
        fullscreenable: true,

        autoHideMenuBar: true,
        center: true,

        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile("index.html");

    // Uncomment the line below if you want the app to start maximized
    // win.maximize();
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow();
        }
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
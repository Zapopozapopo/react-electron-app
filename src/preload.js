const {
    contextBridge,
    ipcRenderer
} = require("electron");
const { channels } = require('./shared/constants');

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            let validChannels = [channels.CALC_DATA];
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        },
        receive: (channel, func) => {
            let validChannels = [channels.CALC_DATA];
            if (validChannels.includes(channel)) {
                ipcRenderer.on(channel, (event, ...args) => func(...args));
            }
        },
        unsubscribe: (channel) => {
            let validChannels = [channels.CALC_DATA];
            if (validChannels.includes(channel)) {
                ipcRenderer.removeAllListeners(channel);
            }
        }
    }
);

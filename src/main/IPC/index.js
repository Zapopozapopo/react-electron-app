const { ipcMain } = require('electron');
const { channels } = require('../../shared/constants');
const { complexCalculation } = require('../service/calculation');

export const initIPC = () => {
    ipcMain.on(channels.CALC_DATA, (event, arg) => {
        const { number1, number2 } = arg;
        const result = complexCalculation(number1, number2)
        event.sender.send(channels.CALC_DATA, result);
    });
}

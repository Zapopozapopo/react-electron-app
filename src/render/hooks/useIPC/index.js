import { useEffect} from "react";

const { send, receive, unsubscribe } = window.api;
import { channels } from '../../../shared/constants';

export const useIPC = (onData) => {

    const sendToCalculation = (number1, number2) => {
        send(channels.CALC_DATA, { number1, number2 });
    }

    useEffect(() => {
        receive(channels.CALC_DATA, (data) => {
            onData(data);
        });

        return () => {
            unsubscribe(channels.CALC_DATA);
        };
    }, []);

    return {
        sendToCalculation,
    }
}

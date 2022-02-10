export { };

interface ImessageApi {
    send: (channel: string, func: any) => void;
    receive: (channel: string, func: any) => any;
}

declare global {
    interface Window {
        "api": {
            messageApi: ImessageApi,
        };
    }
}
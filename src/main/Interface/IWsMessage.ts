import { IBuffer } from "./IBuffer";

export interface IWsMessage {
    event: string;
    buffer: IBuffer;
}
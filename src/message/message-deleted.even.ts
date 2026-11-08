import { MessageEvent } from "./message.event.js";

export class MessageDeletetedEvent extends MessageEvent {
    public constructor(public readonly messageId: string) {
        super();
    }
}
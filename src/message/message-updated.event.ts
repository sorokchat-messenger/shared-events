import { MessageEvent } from "./message.event.js";

export class MessageUpdatedEvent extends MessageEvent {
    public constructor(
        public readonly messageId: string,
        public readonly ciphertext: string,
        public readonly signing: string
    ) {
        super();
    }
}
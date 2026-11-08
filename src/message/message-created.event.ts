import { MessageEvent } from "./message.event.js";

export class MessageCreatedEvent extends MessageEvent {
    public constructor(
        public readonly chatId: string,
        public readonly authorId: string,
        public readonly messageId: string,
        public readonly ciphertext: string,
        public readonly signing: string
    ) {
        super();
    }
}
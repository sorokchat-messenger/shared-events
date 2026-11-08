import { Event } from "../common/index.js";

export abstract class ChatEvent extends Event {
    public constructor(public readonly chatId: string) {
        super();
    }
}
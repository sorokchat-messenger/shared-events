import { Event } from "../common/index.js";

export abstract class ParticipantEvent extends Event {
    public constructor(public readonly chatId: string, public readonly userId: string) {
        super();
    }
}
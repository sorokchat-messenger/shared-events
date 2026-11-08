import { Event } from "../common/index.js";

export abstract class UserEvent extends Event {
    public constructor(public readonly userId: string) {
        super();
    }
}
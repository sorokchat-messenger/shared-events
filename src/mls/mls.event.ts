import { Event } from "../common/index.js";

export abstract class MlsEvent<Payload> extends Event {
    public constructor(
        public readonly groupId: string,
        public readonly epoch: number,
        public readonly payload: Payload
    ) {
        super();
    }
}
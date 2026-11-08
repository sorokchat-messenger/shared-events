export abstract class Event {
    public get pattern(): string {
        const name = this.constructor.name;
        return name
            .replace(/Event$/, "")
            .replace(/([a-z0-9])([A-Z])/g, "$1.$2")
            .toLowerCase();
    }
}
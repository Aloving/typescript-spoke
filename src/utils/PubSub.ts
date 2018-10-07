export class PubSub {
    events: {[index: string]: Function[]} = {};

    public subscribe(type: string, listener: Function) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    public publish(type: string, arg: any) {
        if (this.events[type]) {
            this.events[type].forEach(listener => listener(arg));
        }
    }
}
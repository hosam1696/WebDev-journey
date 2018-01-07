class Events {
    constructor() {
        this.events = {}
    }
    on(eventName, fn) {
        this.events[eventName] = this.events[eventName] || []
        this.events[eventName].push(fn)
    }
    emit(eventName, data) {
        this.events[eventName].forEach(function (fn) {
            fn(data)
        })
    }
    off() {

    }
}
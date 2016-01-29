"use strict";
class EventEmitter {
    constructor() {
        this.registry = {};
    }
    emit(name, ...args) {
        if (!this.registry[name])
            return;
        this.registry[name].forEach(x => {
            x.apply(null, args);
        });
    }
    removeListener(name, fn) {
        if (!this.registry[name])
            return;
        this.registry[name] = this.registry[name].filter(f => f != fn);
    }
    addListener(name, fn) {
        if (!this.registry[name]) {
            this.registry[name] = [fn];
        }
        else {
            this.registry[name].push(fn);
        }
    }
}
exports.EventEmitter = EventEmitter;
var PubSub;
(function (PubSub) {
    var registry = {};
    PubSub.Pub = function (name, ...args) {
        if (!registry[name])
            return;
        registry[name].forEach(x => {
            x.apply(null, args);
        });
    };
    PubSub.Sub = function (name, fn) {
        if (!registry[name]) {
            registry[name] = [fn];
        }
        else {
            registry[name].push(fn);
        }
    };
})(PubSub = exports.PubSub || (exports.PubSub = {}));

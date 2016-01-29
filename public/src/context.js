"use strict";
class Context {
    set store(value) {
        this._store = value;
    }
    get store() {
        return this._store;
    }
    set baseDir(baseDir) {
        if (this._baseDir == null || this._baseDir == undefined || this._baseDir.indexOf("{{") != -1) {
            this._baseDir = baseDir;
        }
    }
    get baseDir() {
        if (this._baseDir.indexOf("{{") != -1)
            return "";
        return this._baseDir;
    }
    get isLogedIn() {
        return this._isLogedIn;
    }
    setUser(username, email) {
        if (this._user == null && (email && email.indexOf("{{") == -1)) {
            this._user = { username: username, email: email };
            this._isLogedIn = true;
        }
        else {
            this._isLogedIn = false;
        }
    }
    get user() {
        return this.user;
    }
}
;
var context = new Context();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = context;

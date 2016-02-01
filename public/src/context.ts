import {Store} from 'redux';
interface User { username: string, email: string }
class Context {
    constructor() {
        if (window.location.hostname.indexOf("localhost") != -1 || window.location.hostname.indexOf("127.0.0.1") != -1) {
            this._isLocalhost = true;
        } else {
            this._isLocalhost = false;
        }
    }
    private _store: Store;
    set store(value: Store) {
        this._store = value;
    }
    get store(): Store {
        return this._store;
    }
    private _baseDir: string;
    set baseDir(baseDir: string) {
        if (this._baseDir == null || this._baseDir == undefined || this._baseDir.indexOf("{{") != -1) {
            this._baseDir = baseDir;
        }
    }
    get baseDir() {
        if (this._baseDir.indexOf("{{") != -1)
            return "";
        return this._baseDir;
    }

    private _isLogedIn: boolean;
    get isLogedIn(): boolean {
        return this._isLogedIn;
    }

    private _user: User;
    public setUser(username: string, email: string) {
        if (this._user == null && (email && email.indexOf("{{") == -1)) {
            this._user = { username: username, email: email };
            this._isLogedIn = true;
        } else {
            this._isLogedIn = false;
        }
    }
    get user(): User {
        return this.user;
    }

    private _isLocalhost: boolean;
    get isLocalhost(): boolean {
        return this._isLocalhost;
    }
};
var context = new Context();
export default context;

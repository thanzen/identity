"use strict";
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = crypto.getRandomValues(new Uint8Array(1))[0] % 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.uuid = uuid;
function indexOf(xpaths = [], xpath) {
    let index = -1;
    for (let i = 0; i < xpaths.length; i++) {
        if (xpath && xpaths[i].xpath == xpath.xpath) {
            return i;
        }
    }
    return index;
}
exports.indexOf = indexOf;

"use strict";
exports.interfacePropertyToStringArray = function (property) {
    if (!property)
        return [];
    return Object.keys(property);
};
exports.interfacePropertyToObjectArray = function (property) {
    var results = [];
    if (!property)
        return [];
    for (var key in Object.keys(property)) {
        results.push({ name: key, alias: key, selected: true });
    }
    return results;
};

"use strict";
exports.interfacePropertyToStringArray = (property) => {
    if (!property)
        return [];
    return Object.keys(property);
};
exports.interfacePropertyToObjectArray = (property) => {
    var results = [];
    if (!property)
        return [];
    for (var key in Object.keys(property)) {
        results.push({ name: key, alias: key, selected: true });
    }
    return results;
};

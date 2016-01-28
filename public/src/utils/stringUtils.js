"use strict";
exports.stringEndsWith = function (source, suffix) {
    return source.indexOf(suffix, source.length - suffix.length) !== -1;
};

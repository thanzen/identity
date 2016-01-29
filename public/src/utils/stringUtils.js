"use strict";
exports.stringEndsWith = (source, suffix) => {
    return source.indexOf(suffix, source.length - suffix.length) !== -1;
};

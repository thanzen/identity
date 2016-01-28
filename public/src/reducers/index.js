"use strict";
var redux_1 = require('redux');
var eventType_1 = require('../eventType');
var initialState = {
    xpaths: [],
    url: ""
};
function getXPaths(state, action) {
    if (state === void 0) { state = initialState.xpaths; }
    switch (action.type) {
        case eventType_1.default.GET_EXTRACT_REQUEST:
            return action.data;
        default:
            return state;
    }
}
function changeUrl(state, action) {
    if (state === void 0) { state = initialState.url; }
    if (action.type == eventType_1.default.URL_CHANGE) {
        return action.url;
    }
    return state;
}
var reducers = redux_1.combineReducers({
    xpaths: getXPaths,
    url: changeUrl
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;

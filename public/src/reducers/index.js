"use strict";
const redux_1 = require('redux');
const eventType_1 = require('../eventType');
let initialState = {
    xpaths: [],
    url: "",
    isValidUrl: false,
    isExtracting: false
};
function getXPaths(state = initialState.xpaths, action) {
    switch (action.type) {
        case eventType_1.default.GET_EXTRACT_REQUEST:
            return action.data;
        case eventType_1.default.TOGGLE_SELECTION:
            return toggleSelection(state, action);
        default:
            return state;
    }
}
function toggleSelection(state = initialState.xpaths, action) {
    if (action.type == eventType_1.default.TOGGLE_SELECTION) {
        let isSelected = !state[action.index].isSelected;
        return [
            ...state.slice(0, action.index),
            Object.assign({}, state[action.index], {
                isSelected: isSelected
            }),
            ...state.slice(action.index + 1)
        ];
    }
    return state;
}
function changeUrl(state = initialState.url, action) {
    if (action.type == eventType_1.default.URL_CHANGE) {
        return action.url;
    }
    return state;
}
function validUrl(state = initialState.isValidUrl, action) {
    if (action.type == eventType_1.default.VALID_URL) {
        return action.isValidUrl;
    }
    return state;
}
function processExtracting(state = initialState.isExtracting, action) {
    if (action.type == eventType_1.default.EXTRACTING) {
        return action.isExtracting;
    }
    return state;
}
const reducers = redux_1.combineReducers({
    xpaths: getXPaths,
    url: changeUrl,
    isValidUrl: validUrl,
    isExtracting: processExtracting
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducers;

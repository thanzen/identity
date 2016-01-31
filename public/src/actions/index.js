"use strict";
const eventType_1 = require('../eventType');
const context_1 = require('../context');
const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
var EventType = {
    URL_CHANGE: "URL_CHANGE",
    SUBMIT_RESULT: "SUBMIT_RESULT",
    TOGGLE_SELECTION: "TOGGLE_SELECTION",
    SUBMIT_EXTRACT_REQUEST: "SUBMIT_EXTRACT_REQUEST"
};
function submitExtractRequest(url) {
    var data = new FormData();
    data.append('page_url', url);
    context_1.default.store.dispatch({ type: eventType_1.default.EXTRACTING, isExtracting: true });
    return fetch('//52.35.87.105:8888/url_enter', {
        method: 'post',
        body: data
    }).then(function (response) {
        return response.json();
    }).then(function (data) {
        context_1.default.store.dispatch({ type: eventType_1.default.EXTRACTING, isExtracting: false });
        context_1.default.store.dispatch({ type: eventType_1.default.GET_EXTRACT_REQUEST, data: data });
    }).catch(function (reason) {
        context_1.default.store.dispatch({ type: eventType_1.default.EXTRACTING, isExtracting: false });
        context_1.default.store.dispatch({ type: eventType_1.default.GET_EXTRACT_REQUEST, data: [] });
        console.log(reason);
    });
}
exports.submitExtractRequest = submitExtractRequest;
function changeUrl(url) {
    context_1.default.store.dispatch({ type: eventType_1.default.URL_CHANGE, url: url });
    let isValidUrl = regexp.test(url);
    context_1.default.store.dispatch({ type: eventType_1.default.VALID_URL, isValidUrl: isValidUrl });
}
exports.changeUrl = changeUrl;
function toggleSelection(index) {
    context_1.default.store.dispatch({ type: eventType_1.default.TOGGLE_SELECTION, index: index });
}
exports.toggleSelection = toggleSelection;

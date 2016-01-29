"use strict";
const eventType_1 = require('../eventType');
const context_1 = require('../context');
var EventType = {
    URL_CHANGE: "URL_CHANGE",
    SUBMIT_RESULT: "SUBMIT_RESULT",
    TOGGLE_SELECTION: "TOGGLE_SELECTION",
    SUBMIT_EXTRACT_REQUEST: "SUBMIT_EXTRACT_REQUEST"
};
function submitExtractRequest(url) {
    var data = new FormData();
    data.append('page_url', url);
    return fetch('//52.35.87.105:8888/url_enter', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: data
    }).then(function (response) {
        context_1.default.store.dispatch({ type: eventType_1.default.GET_EXTRACT_REQUEST, data: response });
    }, function (reason) {
        context_1.default.store.dispatch({ type: eventType_1.default.GET_EXTRACT_REQUEST, data: [{ path: "/1", value: "1" }, { path: "2", value: "2" }] });
        console.log(reason);
    });
}
exports.submitExtractRequest = submitExtractRequest;
function changeUrl(url) {
    context_1.default.store.dispatch({ type: eventType_1.default.URL_CHANGE, url: url });
}
exports.changeUrl = changeUrl;
function toggleSelection(xpath) {
    context_1.default.store.dispatch({ type: eventType_1.default.TOGGLE_SELECTION, xpath: xpath });
}
exports.toggleSelection = toggleSelection;

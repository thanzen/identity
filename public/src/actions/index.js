"use strict";
var eventType_1 = require('../eventType');
var context_1 = require('../context');
var EventType = {
    URL_CHANGE: "URL_CHANGE",
    SUBMIT_RESULT: "SUBMIT_RESULT",
    TOGGLE_SELECTION: "TOGGLE_SELECTION",
    SUBMIT_EXTRACT_REQUEST: "SUBMIT_EXTRACT_REQUEST"
};
function submitExtractRequest(url) {
    return fetch('/users', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            page_url: url,
        })
    }).then(function (response) {
        context_1.default.store.dispatch({ type: eventType_1.default.GET_EXTRACT_REQUEST, data: response });
    }, function (reason) {
        console.log(reason);
    });
}
exports.submitExtractRequest = submitExtractRequest;
function changeUrl(url) {
    context_1.default.store.dispatch({ type: eventType_1.default.URL_CHANGE, url: url });
}
exports.changeUrl = changeUrl;

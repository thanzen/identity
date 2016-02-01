"use strict";
const eventType_1 = require('../eventType');
const context_1 = require('../context');
const regexp = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
function submitExtractRequest(url) {
    context_1.default.store.dispatch({ type: eventType_1.default.EXTRACTING, isExtracting: true });
    var pageUrl = "api/extractor/parse?page_url=" + url;
    if (context_1.default.isLocalhost) {
        pageUrl = "//52.35.87.105:8888/url_enter?page_url=" + url;
    }
    return fetch(pageUrl)
        .then(function (response) {
        return response.json();
    }).then(function (data) {
        let json = null;
        if (context_1.default.isLocalhost) {
            json = data;
        }
        else {
            json = JSON.parse(data);
        }
        context_1.default.store.dispatch({ type: eventType_1.default.EXTRACTING, isExtracting: false });
        context_1.default.store.dispatch({ type: eventType_1.default.GET_EXTRACT_REQUEST, data: json });
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

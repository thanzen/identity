import eventType from '../eventType';
import context from '../context';
import {Xpath} from '../models/Xpath';

var EventType = {
    URL_CHANGE: "URL_CHANGE",
    SUBMIT_RESULT: "SUBMIT_RESULT",
    TOGGLE_SELECTION: "TOGGLE_SELECTION",
    SUBMIT_EXTRACT_REQUEST: "SUBMIT_EXTRACT_REQUEST"
};


export function submitExtractRequest(url: string) {
    return fetch('/users', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            page_url: url,
        })
    }).then(function(response) {
        context.store.dispatch({ type: eventType.GET_EXTRACT_REQUEST, data: response });
    }, function(reason) {
        console.log(reason); // Error!
    });
}


export function changeUrl(url: string) {
    context.store.dispatch({ type: eventType.URL_CHANGE, url: url });
}

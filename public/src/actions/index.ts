import eventType from '../eventType';
import context from '../context';
import {Xpath} from '../models/Xpath';

var EventType = {
    URL_CHANGE: "URL_CHANGE",
    SUBMIT_RESULT: "SUBMIT_RESULT",
    TOGGLE_SELECTION: "TOGGLE_SELECTION",
    SUBMIT_EXTRACT_REQUEST: "SUBMIT_EXTRACT_REQUEST"
};

//http://place.qyer.com/poi/V2EJalFiBz9TZg/review/
export function submitExtractRequest(url: string) {

    var data = new FormData();
    data.append('page_url', url);

    // fetch('//192.168.0.101:8889/test')
    //   .then(function(response) {
    //     console.log(response); // Error!
    //   }).then(function(body) {
    //     //document.body.innerHTML = body
    //      console.log(body);
    //   });
    return fetch('//52.35.87.105:8888/url_enter', {
        method: 'post',
        // headers: {
        //     'Accept': 'application/json'
        //     // 'Content-Type': 'application/json'
        // },
        body: data
        // JSON.stringify({
        //     page_url: url,
        // })
    }).then(function(response) {
        var json = response.json();
        context.store.dispatch({ type: eventType.GET_EXTRACT_REQUEST, data: json });
    }, function(reason) {
        context.store.dispatch({ type: eventType.GET_EXTRACT_REQUEST, data: [{ path: "/1", value: "1" }, { path: "2", value: "2" }] });
        console.log(reason); // Error!
    });
}


export function changeUrl(url: string) {
    context.store.dispatch({ type: eventType.URL_CHANGE, url: url });
}

export function toggleSelection(xpath: Xpath) {
    context.store.dispatch({ type: eventType.TOGGLE_SELECTION, xpath: xpath });
}

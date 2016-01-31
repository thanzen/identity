import eventType from '../eventType';
import context from '../context';
import {Xpath} from '../models/Xpath';
const regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;


var EventType = {
    URL_CHANGE: "URL_CHANGE",
    SUBMIT_RESULT: "SUBMIT_RESULT",
    TOGGLE_SELECTION: "TOGGLE_SELECTION",
    SUBMIT_EXTRACT_REQUEST: "SUBMIT_EXTRACT_REQUEST"
};

//http://place.qyer.com/poi/V2EJalFiBz9TZg/review/
export function submitExtractRequest(url: string) {
    context.store.dispatch({ type: eventType.EXTRACTING, isExtracting: true });
    var pageUrl = "api/extractor/parse?page_url=" + url;
    var host = 'http://localhost:8080/' ;
    return fetch( pageUrl)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            var json = JSON.parse(data);
            context.store.dispatch({ type: eventType.EXTRACTING, isExtracting: false });
            context.store.dispatch({ type: eventType.GET_EXTRACT_REQUEST, data: json });
        }).catch(function(reason) {
            context.store.dispatch({ type: eventType.EXTRACTING, isExtracting: false });
            context.store.dispatch({ type: eventType.GET_EXTRACT_REQUEST, data: [] });
            console.log(reason); // Error!
        });
    // context.store.dispatch({ type: eventType.EXTRACTING, isExtracting: true });
    // return fetch('//52.35.87.105:8888/url_enter', {
    //     method: 'post',
    //     // headers: {
    //     //     'Accept': 'application/json'
    //     //     // 'Content-Type': 'application/json'
    //     // },
    //     body: data
    //     // JSON.stringify({
    //     //     page_url: url,
    //     // })
    // }).then(function(response) {
    //     return response.json();
    // }).then(function(data) {
    //     context.store.dispatch({ type: eventType.EXTRACTING, isExtracting: false });
    //     context.store.dispatch({ type: eventType.GET_EXTRACT_REQUEST, data: data });
    // }).catch(function(reason) {
    //     context.store.dispatch({ type: eventType.EXTRACTING, isExtracting: false });
    //     context.store.dispatch({ type: eventType.GET_EXTRACT_REQUEST, data: [] });
    //     console.log(reason); // Error!
    // });
}


export function changeUrl(url: string) {
    context.store.dispatch({ type: eventType.URL_CHANGE, url: url });
    let isValidUrl = regexp.test(url);
    context.store.dispatch({ type: eventType.VALID_URL, isValidUrl: isValidUrl });
}

export function toggleSelection(index: number) {
    context.store.dispatch({ type: eventType.TOGGLE_SELECTION, index: index });
}

import eventType from '../eventType';
import context from '../context';
import {Xpath} from '../models/Xpath';
const regexp = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;

//http://place.qyer.com/poi/V2EJalFiBz9TZg/review/
export function submitExtractRequest(url: string) {
    context.store.dispatch({ type: eventType.EXTRACTING, isExtracting: true });
    var pageUrl = "api/extractor/parse?page_url=" + url;
    if (context.isLocalhost) {
        pageUrl = "//52.35.87.105:8888/url_enter?page_url=" + url;
    }
    return fetch(pageUrl)
        .then(function(response) {
            return response.json();
        }).then(function(data) {
            let json = null;
            if (context.isLocalhost) {
                json = data
            } else {
                json = JSON.parse(data);
            }
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

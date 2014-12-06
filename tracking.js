/**
    Copyright 2014 Benjamin Butzow
   
   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at
       
       http://www.apache.org/licenses/LICENSE-2.0
   
   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
**/

var parent = chrome.contextMenus.create({
    title: "Tracking",
    contexts: ["selection"]
});

var fedexOption = chrome.contextMenus.create({
    title: "FedEx",
    parentId: parent,
    contexts: ["selection"],
    onclick: onFedexClick
});

var upsOption = chrome.contextMenus.create({
    title: "UPS",
    parentId: parent,
    contexts: ["selection"],
    onclick: onUpsClick
});

var uspsOption = chrome.contextMenus.create({
    title: "USPS",
    parentId: parent,
    contexts: ["selection"],
    onclick: onUspsClick
});

function onFedexClick(info, tab) {
    var FEDEX_URL = "http://www.fedex.com/Search/search?q=TRACKINGNUMBER&output=xml_no_dtd&sort=date%3AD%3AL%3Ad1&client=fedex_us&ud=1&oe=UTF-8&ie=UTF-8&proxystylesheet=fedex_us&hl=en&site=us&headerFooterDir=us&numgm=3";
    contextMenuClick(FEDEX_URL.replace("TRACKINGNUMBER", info.selectionText));
}

function onUpsClick(info, tab) {
    var UPS_URL = "http://wwwapps.ups.com/WebTracking/processInputRequest?tracknum=TRACKINGNUMBER";
    contextMenuClick(UPS_URL.replace("TRACKINGNUMBER", info.selectionText));
}

function onUspsClick(info, tab) {
    var USPS_URL = "https://tools.usps.com/go/TrackConfirmAction?qtc_tLabels1=TRACKINGNUMBER";
    contextMenuClick(USPS_URL.replace("TRACKINGNUMBER", info.selectionText));
}
                     
function contextMenuClick(url) {
    chrome.tabs.create({
        url: url
    });
}
